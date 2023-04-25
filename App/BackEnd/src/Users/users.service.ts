import { Injectable } from '@nestjs/common';
import { UsersPrismaService } from './UsersPrisma/users.prisma.service';
import UsersWhereInput from './UsersDTO/typesUsers';
import { CreateUserDTO } from './UsersDTO/createUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: UsersPrismaService) {}

  async getAll() {
    return this.prisma.users.findMany();
  }

  async getById(clienteId: number) {
    const where: UsersWhereInput = { cliente_id: Number(clienteId) };
    return this.prisma.users.findUnique({ where });
  }

  async createClient({ email, password }: CreateUserDTO) {
    password = password;

    password = await bcrypt.hash(password, await bcrypt.genSalt());
    return this.prisma.users.create({ data: { email, password } });
  }

  //  async switchAvailableCliente(clienteId: number, available: boolean) {
  //    const where: UsersWhereInput = { cliente_id: Number(clienteId) };
  //    return this.prisma.users.update({
  //      where,
  //     available,
  //    });
  //  }
}
