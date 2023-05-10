import { Injectable } from '@nestjs/common';
import { ConfigFreezerPrismaService } from 'src/ConfigsFreezer/configFreezerPrisma/configFreezer.prisma.service';
import { PatchConfigFreezerDTO } from './configFreezerDTO/patch-configFreezer.dto';
import ConfigFreezerWhereUniqueInput from './configFreezerDTO/typesFreezer';
import { PostConfigFreezerDTO } from './configFreezerDTO/post-configFreezer.dto';
import ConfigFreezerCreateInput from './configFreezerDTO/ConfigFreezerCreateInput';

@Injectable()
export class ConfigFreezerService {
  constructor(private readonly prisma: ConfigFreezerPrismaService) {}

  async getAll(clienteId: number) {
    const where: ConfigFreezerWhereUniqueInput = {
      num_cliente: Number(clienteId),
    };
    return this.prisma.configFreezer.findMany({ where });
  }

  async getById(clienteId: number, freezerId: number) {
    const where = {
      num_cliente: clienteId,
      freezer_id: freezerId
    };
    const allConfigsById = await this.prisma.configFreezer.findMany({ where });
    return allConfigsById[allConfigsById.length - 1];
  }

  async patchData(data: PatchConfigFreezerDTO) {
    const where: ConfigFreezerWhereUniqueInput = {
      num_cliente: Number(data.num_cliente),
      freezer_id: Number(data.freezer_id),
    };
    const updateData = {
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
    num_cliente,
    freezer_id,
    porta_tempo,
    temp_min,
    temp_max,
    temp_padrao,
  }: PostConfigFreezerDTO) {
    const data: ConfigFreezerCreateInput = {
      num_cliente,
      freezer_id,
      temp_padrao,
      temp_min,
      temp_max,
      porta_tempo,
    };
    return this.prisma.configFreezer.create({ data });
  }
  
}
