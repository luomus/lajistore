import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { UserService } from './user.service';
import { User } from '@luomus/store/database';

@Injectable()
export class AuthenticationService {
  private cache: { [key: string]: User } = {};

  constructor(private readonly userService: UserService) {}

  /**
   * Register new user to the system
   *
   * @param userData
   */
  async register(userData: User) {
    const hashedPassword = await hash(userData.password, 12);
    try {
      const createdUser = await this.userService.create({
        ...userData,
        password: hashedPassword,
      });
      createdUser.password = undefined;
      return createdUser;
    } catch (error) {
      console.error(error);
      throw new HttpException(
        'Failed to create System',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  /**
   * Get authenticated user or null if no matching user found
   *
   * @param systemID
   * @param plainTextPassword
   */
  async getAuthenticatedUser(
    systemID: string,
    plainTextPassword: string
  ): Promise<User | null> {
    const cacheKey = [systemID, plainTextPassword].join(':::');
    if (this.cache[cacheKey]) {
      return this.cache[cacheKey];
    }
    try {
      const user = await this.userService.getBySystemId(systemID);

      if (await this.verifyPassword(plainTextPassword, user.password)) {
        user.password = undefined;
        this.cache[cacheKey] = user;

        return user;
      }
    } catch (error) {
      console.log(error);
      if (error instanceof HttpException && systemID && plainTextPassword) {
        // This is to keep response times same as with the user that actually exists
        await this.verifyPassword(plainTextPassword, plainTextPassword);
      }
    }
    return null;
  }

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword = ''
  ): Promise<boolean> {
    return await compare(plainTextPassword, hashedPassword);
  }
}
