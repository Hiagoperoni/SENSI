import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersPrismaService } from './UsersPrisma/users.prisma.service';
import UsersWhereInput from './UsersDTO/typesUsers';
import { CreateUserDTO } from './UsersDTO/createUser.dto';
import * as bcrypt from 'bcrypt';
import { LoginUserDTO } from './UsersDTO/loginUser.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: UsersPrismaService) {}

  async getAll() {
    return this.prisma.users.findMany();
  }

  async getById(clienteId: number) {
    const where: UsersWhereInput = { num_cliente: Number(clienteId) };
    return this.prisma.users.findUnique({ where });
  }

  async createClient({ email, password, num_cliente, qnt_freezers }: CreateUserDTO) {
    password = password;

    password = await bcrypt.hash(password, await bcrypt.genSalt());
    return this.prisma.users.create({ data: { email, password, num_cliente, qnt_freezers } });
  }

  async getClient({ email, password }: LoginUserDTO) {
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

    return userLogin.cliente_id;
  }

  //  async switchAvailableCliente(clienteId: number, available: boolean) {
  //    const where: UsersWhereInput = { cliente_id: Number(clienteId) };
  //    return this.prisma.users.update({
  //      where,
  //     available,
  //    });
  //  }
}
