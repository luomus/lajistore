import { catchError, map } from 'rxjs/operators';
import { lastValueFrom, of } from 'rxjs';
import { GeneratorInterface } from './generator.interface';
import { StoreConfigService } from '@luomus/store/config';
import { FileService } from '@luomus/store/shared';

export abstract class AbstractGenerateService implements GeneratorInterface {
  protected readonly configService: StoreConfigService;
  protected readonly fileService: FileService;

  private folderChecked = false;

  protected constructor(
    configService: StoreConfigService,
    fileService: FileService
  ) {
    this.configService = configService;
    this.fileService = fileService;
  }

  public abstract generate(classes?: string[]): Promise<boolean>;

  protected async writeToFile(
    file: string,
    data: string,
    folder?: string,
    filePattern = FileService.REPLACE_NAME
  ): Promise<boolean> {
    if (folder) {
      file = this.fileService.getFilename(file, folder, filePattern);
      if (!this.folderChecked) {
        this.folderChecked = true;
        try {
          await lastValueFrom(this.fileService.makeFolder(folder));
        } catch (e) {
          // pass
        }
      }
    }
    return lastValueFrom(this.fileService
      .writeTextFile(file, data)
      .pipe(
        map(() => true),
        catchError((e) => {
          console.error(e);
          return of(false);
        })
      ));
  }
}
