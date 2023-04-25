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

  @Patch()
  async updateConfigFreezer(@Body() data: PatchConfigFreezerDTO) {
    return this.configFreezerService.patchData(data);
  }

  @Post()
  async postData(@Body() data: PostConfigFreezerDTO) {
    return this.configFreezerService.postData(data);
  }
}
