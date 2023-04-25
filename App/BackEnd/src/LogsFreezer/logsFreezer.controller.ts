import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { LogsFreezerService } from './logsFreezer.service';
import { PostLogsFreezer } from './LogsFreezerDTO/post-LogsFreezer';

@Controller('freezer/logs')
export class LogsFreezerController {
  constructor(private readonly logsFreezerService: LogsFreezerService) {}

  @Post()
  async postData(@Body() data: PostLogsFreezer) {
    return this.logsFreezerService.postData(data);
  }

  //  @Get()
  //  async getAll() {
  //    return this.logsFreezerService.getAll();
  //  }

  @Get(':id')
  async getByCliente(@Param('id') id: number) {
    const clienteId = Number(id);
    return this.logsFreezerService.getByCliente(clienteId);
  }

  @Get(':id/:freezer')
  async getByFreezer(@Param('id') id: number, @Param('freezer') freezer_id: number) {
    const clienteId = Number(id);
    const freezerId = Number(freezer_id);
    return this.logsFreezerService.getByFreezerId(clienteId, freezerId);
  }
}
