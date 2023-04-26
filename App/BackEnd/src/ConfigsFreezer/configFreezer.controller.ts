import { Body, Controller, Patch, Get, Param, Post } from '@nestjs/common';
import { PatchConfigFreezerDTO } from './configFreezerDTO/patch-configFreezer.dto';
import { ConfigFreezerService } from './configFreezer.service';
import { PostConfigFreezerDTO } from './configFreezerDTO/post-configFreezer.dto';

@Controller('freezer/config')
export class ConfigFreezerController {
  constructor(private readonly configFreezerService: ConfigFreezerService) {}

  @Get(':id')
  async getAll(@Param('id') id: number) {
    return this.configFreezerService.getAll(id);
  }

  @Get(':id/:freezerId')
  async getFreezerById(@Param('id') id: number, @Param('freezerId') freezerId: number) {
    return this.configFreezerService.getById(Number(id), Number(freezerId));
  }

  @Patch()
  async updateConfigFreezer(@Body() data: PatchConfigFreezerDTO) {
    return this.configFreezerService.patchData(data);
  }

  @Post()
  async postData(@Body(){
    cliente_id,
    freezer_id,
    porta_tempo,
    temp_min,
    temp_max,
    temp_padrao,
  }: PostConfigFreezerDTO) {
    return this.configFreezerService.postData({
      cliente_id,
      freezer_id,
      porta_tempo,
      temp_min,
      temp_max,
      temp_padrao,
    });
  }
}
