import { Connection } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(private connection: Connection) {}

  create(user: User) {
    const repo = this.connection.getRepository(User);
    const newUser = repo.create(user);
    return repo.save(newUser);
  }

  findOne(where: Partial<Record<keyof User, any>>) {
    const repo = this.connection.getRepository(User);
    return repo.findOne(where)
  }
}
