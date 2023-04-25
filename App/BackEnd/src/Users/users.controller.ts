import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './UsersDTO/createUser.dto';
// import { Roles } from "src/decorators/role.decorator";
// import { Role } from "src/enums/role.enum";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //  @Roles(Role.Admin)
  @Get()
  async getAll() {
    return this.usersService.getAll();
  }

  //  @Roles(Role.Admin)
  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.usersService.getById(id);
  }

  //  @Roles(Role.Admin)
  @Post()
  async createUser(@Body() { email, password }: CreateUserDTO) {
    return this.usersService.createClient({ email, password });
  }
}
