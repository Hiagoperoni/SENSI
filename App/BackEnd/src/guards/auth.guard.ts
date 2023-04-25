import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UsersService } from 'src/Users/users.service';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    try {
      const data = this.authService.checkToken(
        (authorization ?? '').split(' ')[1],
      );
      request.tokenPayload = data;
      request.user = await this.userService.getById(data.sub);
      return true;
    } catch (error) {
      return false;
    }
  }
}
