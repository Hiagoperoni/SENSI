import { Injectable } from '@nestjs/common';
import { ConfigFreezerPrismaService } from 'src/ConfigsFreezer/configFreezerPrisma/configFreezer.prisma.service';
import { PatchConfigFreezerDTO } from './configFreezerDTO/patch-configFreezer.dto';
import ConfigFreezerWhereUniqueInput from './configFreezerDTO/typesFreezer';
import { PostConfigFreezerDTO } from './configFreezerDTO/post-configFreezer.dto';

@Injectable()
export class ConfigFreezerService {
  constructor(private readonly prisma: ConfigFreezerPrismaService) {}

  async getAll(clienteId: number) {
    const where: ConfigFreezerWhereUniqueInput = {
      cliente_id: Number(clienteId),
    };
    return this.prisma.configFreezer.findMany({ where });
  }

  async patchData(data: PatchConfigFreezerDTO) {
    const where: ConfigFreezerWhereUniqueInput = {
      id: Number(data.freezer_id),
    };
    const updateData = {
      cliente_id: data.cliente_id,
      temp_padrao: data.temp_padrao,
      temp_margem_frio: data.temp_margem_frio,
      temp_margem_quente: data.temp_margem_quente,
      porta_tempo: data.porta_tempo,
    };
    return this.prisma.configFreezer.update({
      where,
      data: updateData,
    });
  }

  async postData({
    cliente_id,
    freezer_id,
    porta_tempo,
    temp_min,
    temp_max,
    temp_padrao,
  }: PostConfigFreezerDTO) {
    const data = {
      data: {
        cliente_id,
        freezer_id,
        porta_tempo,
        temp_min,
        temp_max,
        temp_padrao,
      },
    };
    return this.prisma.configFreezer.create(data);
  }
}
