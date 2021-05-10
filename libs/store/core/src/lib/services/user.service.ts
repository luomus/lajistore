import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User, UserRepository } from '@luomus/store/database';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  /**
   * Get the user with system ID
   *
   * @param systemID
   */
  async getBySystemId(systemID: string): Promise<User> {
    const user = await this.userRepository.findOne({ systemID });
    if (user) {
      return user;
    }
    throw new HttpException(
      'User with this systemID does not exist',
      HttpStatus.NOT_FOUND
    );
  }

  /**
   * Create new user
   *
   * @param userData
   */
  create(userData: User): Promise<User> {
    return this.userRepository.create(userData);
  }
}
