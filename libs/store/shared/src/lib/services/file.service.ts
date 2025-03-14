import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import { Observable, Subscriber } from 'rxjs';
import { join } from 'path';
import { map } from 'rxjs/operators';
import { UtilityService } from './utility.service';
import { StoreConfigService } from '@luomus/store/config';

@Injectable()
export class FileService {
  static REPLACE_NAME = '%name%';

  constructor(private configService: StoreConfigService) {}

  getFilename(
    name: string,
    folder: string = this.configService.get('JSON_SCHEMA_PATH'),
    pattern: string = this.configService.get('JSON_FILENAME_PATTERN')
  ) {
    return this.join([
      folder,
      pattern.replace(FileService.REPLACE_NAME, UtilityService.normalize(name)),
    ]);
  }

  join(file: string[]): string {
    return join(...file);
  }

  listFiles(folder: string): Observable<string[]> {
    return new Observable((sub: Subscriber<string[]>) => {
      fs.readdir(folder, (err, files) => {
        if (err) {
          console.log('Error loading list of files ', folder);
          return sub.error(err);
        }
        sub.next(files);
        sub.complete();
      });
    });
  }

  makeFolder(folder: string | string[]): Observable<void> {
    return new Observable((sub: Subscriber<void>) => {
      fs.mkdir(
        Array.isArray(folder) ? join(...folder) : folder,
        0o770,
        function (err) {
          if (err) return sub.error(err);
          sub.next();
          sub.complete();
        }
      );
    });
  }

  readJsonFile<T>(filename: string, encoding = 'utf8'): Observable<T> {
    return this.readTextFile(filename, encoding).pipe(
      map((txt: string) => JSON.parse(txt))
    );
  }

  readTextFile(filename: string, encoding = 'utf8'): Observable<string> {
    return new Observable((sub: Subscriber<string>) => {
      fs.readFile(filename as fs.PathOrFileDescriptor, { encoding: encoding as BufferEncoding }, function (err: any, data: string) {
        if (err) {
          console.log('Error loading text file', filename);
          return sub.error(err);
        }
        sub.next(data);
        sub.complete();
      });
    });
  }

  writeTextFile(filename: string, data: string): Observable<void> {
    return new Observable((sub: Subscriber<void>) => {
      fs.writeFile(filename, data, (err) => {
        if (err) return sub.error(err);
        sub.next();
        sub.complete();
      });
    });
  }

  fileExists(filename: string): Observable<boolean> {
    return new Observable((sub: Subscriber<boolean>) => {
      fs.exists(filename, (exists) => {
        sub.next(exists);
        sub.complete();
      });
    });
  }
}
