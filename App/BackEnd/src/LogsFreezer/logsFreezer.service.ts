import { Injectable } from '@nestjs/common';
import { LogsFreezerPrismaService } from './LogsFreezerPrisma/logsFreezer.prisma.service';
import { PostLogsFreezer } from './LogsFreezerDTO/post-LogsFreezer';

@Injectable()
export class LogsFreezerService {
  constructor(private readonly prisma: LogsFreezerPrismaService) {}

  async postData({ cliente_id, freezer_id, porta_status, temp_atual }: PostLogsFreezer) {
    const configFreezer = await this.prisma.configFreezer.findMany({
      where: {
        cliente_id: cliente_id,
        freezer_id: freezer_id,
      },
    });
    if (porta_status === "Aberta") {
      const errorReported = `Porta aberta por mais de [${configFreezer[0].porta_tempo}s]`;
      const log1 = await this.prisma.logsFreezer.create({
        data: {
          cliente_id,
          freezer_id,
          temp_atual,
          temp_padrao: configFreezer[0].temp_padrao,
          temp_min: configFreezer[0].temp_min,
          temp_max: configFreezer[0].temp_max,
          porta_tempo: configFreezer[0].porta_tempo,
          porta_status: porta_status,
          Erro: 'none',
        },
      });
      setTimeout(async () => {
        const lastLogById = await this.getByFreezerId(cliente_id, freezer_id);
        if (log1.porta_status === lastLogById.porta_status) {
          return this.prisma.logsFreezer.create({
            data: {
              cliente_id,
              freezer_id,
              temp_atual,
              temp_padrao: configFreezer[0].temp_padrao,
              temp_min: configFreezer[0].temp_min,
              temp_max: configFreezer[0].temp_max,
              porta_tempo: configFreezer[0].porta_tempo,
              porta_status: porta_status,
              Erro: errorReported,
            },
          });
        }
      }, (1000 * configFreezer[0].porta_tempo));
    }
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
          porta_status: porta_status,
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
        porta_status: porta_status,
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

  async resetError(data) {
    console.log(data.cliente_id);
    const allFrezzers = await this.prisma.logsFreezer.findMany({
      where: {
        cliente_id: data.cliente_id,
        freezer_id: data.freezer_id,
      }
    });
    const lastFreezer = allFrezzers[allFrezzers.length - 1];
    
    return this.prisma.logsFreezer.create({
      data: {
        cliente_id: lastFreezer.cliente_id,
        freezer_id: lastFreezer.freezer_id,
        temp_atual: lastFreezer.temp_atual,
        temp_padrao: lastFreezer.temp_padrao,
        temp_min: lastFreezer.temp_min,
        temp_max: lastFreezer.temp_max,
        porta_tempo: lastFreezer.porta_tempo,
        porta_status: lastFreezer.porta_status,
        Erro: 'none',
      },
    });
  }
}
