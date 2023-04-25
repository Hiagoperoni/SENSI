import { Injectable } from '@nestjs/common';
import { LogsFreezerPrismaService } from './LogsFreezerPrisma/logsFreezer.prisma.service';
import { PostLogsFreezer } from './LogsFreezerDTO/post-LogsFreezer';

@Injectable()
export class LogsFreezerService {
  constructor(private readonly prisma: LogsFreezerPrismaService) {}

  async postData({
    cliente_id,
    freezer_id,
    status_porta,
    temp_atual,
  }: PostLogsFreezer) {
    const configFreezer = await this.prisma.configFreezer.findMany({
      where: {
        cliente_id: cliente_id,
        freezer_id: freezer_id,
      },
    });
    const tempFrio = Number(configFreezer[0].temp_min);
    const tempQuente = Number(configFreezer[0].temp_max);
    const tempAtual = Number(temp_atual);
    if (tempAtual > tempQuente || tempAtual < tempFrio) {
      const errorReported = `Temperatura fora do permitido [${temp_atual}ºC]`;
      return this.prisma.logsFreezer.create({
        data: {
          cliente_id,
          freezer_id,
          temp_atual,
          temp_padrao: configFreezer[0].temp_padrao,
          temp_min: configFreezer[0].temp_min,
          temp_max: configFreezer[0].temp_max,
          porta_tempo: configFreezer[0].porta_tempo,
          porta_status: status_porta,
          Erro: errorReported,
        },
      });
    }
    return this.prisma.logsFreezer.create({
      data: {
        cliente_id,
        freezer_id,
        temp_atual,
        temp_padrao: configFreezer[0].temp_padrao,
        temp_min: configFreezer[0].temp_min,
        temp_max: configFreezer[0].temp_max,
        porta_tempo: configFreezer[0].porta_tempo,
        porta_status: status_porta,
        Erro: 'none',
      },
    });
  }

  //  async getAll() {
  //    return this.prisma.logsFreezer.findMany();
  //  }

  async getByCliente(id: number) {
    return this.prisma.logsFreezer.findMany({
      where: {
        cliente_id: id,
      },
    });
  }

  async getByFreezerId(id: number, freezerId: number) {
    const allFrezzers = await this.prisma.logsFreezer.findMany({
      where: {
        cliente_id: id,
        freezer_id: freezerId,
      }
    });
    const lastFreezer = allFrezzers[allFrezzers.length - 1];
    return lastFreezer;
  }
}
