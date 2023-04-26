import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { Users } from '@prisma/client';
import { UsersPrismaService } from 'src/Users/UsersPrisma/users.prisma.service';
import { UsersService } from 'src/Users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: UsersPrismaService,
    private readonly usersService: UsersService,
  ) {}

  createToken(user) {
    return {
      accessToken: this.jwtService.sign(
        {
          email: user.email,
        },
        {
          expiresIn: '1 day',
          subject: String(user.cliente_id),
          audience: 'users',
          issuer: 'login',
        },
      ),
    };
  }

  checkToken(token: string) {
    try {
      const authVerified = this.jwtService.verify(token, {
        audience: 'users',
        issuer: 'login',
      });
      return authVerified;
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  isValidToken(token: string) {
    try {
      this.checkToken(token);
      return true;
    } catch (err) {
      return false;
    }
  }

  async login(email: string, password: string) {
    const userLogin = await this.prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (!userLogin) {
      throw new UnauthorizedException('E-mail e/ou senha inválido(s)');
    }

    const authorized = await bcrypt.compare(password, userLogin.password)
    
    if (!authorized) {
      throw new UnauthorizedException('E-mail e/ou senha inválido(s)');
    }

    const response = {
      userId: userLogin.cliente_id,
      token:  this.createToken(userLogin),
    }

    return response;
  }

  async register(email: string, password: string) {
    const user = await this.usersService.createClient({ email, password });

    return this.createToken(user);
  }

  async forget(email: string) {
    const user = await this.prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('E-mail não cadastrado');
    }

    //ENVIAR EMAIL

    return true;
  }

  async reset(password: string, token: string) {
    const id = 1;
    console.log(token);

    const user = await this.prisma.users.update({
      where: {
        cliente_id: id,
      },
      data: {
        password,
      },
    });
    return this.createToken(user);
  }
}
