import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthenticationService } from '@luomus/store/core';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authenticationService: AuthenticationService) {}

  /**
   * Check that the request has basic authorization
   * and add user information to the request
   *
   * @throws UnauthorizedException
   * @param context
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const b64auth = (request.headers.authorization || '').split(' ')[1];
    const [systemID, password] = Buffer.from(b64auth || '', 'base64')
      .toString()
      .split(':', 2);

    const user = await this.authenticationService.getAuthenticatedUser(
      systemID,
      password
    );
    if (!user) {
      throw new UnauthorizedException();
    }
    request.user = user;
    return true;
  }
}
