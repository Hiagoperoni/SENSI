import React, { useState, useEffect } from 'react';
import { getConfigFreezer, postConfigFreezer } from '../services/request';

function FreezerConfigComp(clienteId, freezerId) {
  const clienteid = 1;
  const id = 2;
  const [configFreezerAt, setConfigFreezerAt] = useState({
    temp_padrao: 0,
    temp_max: 0,
    temp_min: 0,
    porta_tempo: 0,
  });

  useEffect(() => {
    async function fetchData() {
      const { data } = await getConfigFreezer(clienteid, id);
      console.log(data);
      setConfigFreezerAt({
        temp_padrao: data.temp_padrao,
        temp_max: data.temp_max,
        temp_min: data.temp_min,
        porta_tempo: data.porta_tempo,
      });
    }

    fetchData();
  }, []);

  const verifytempPadrao = ({ target }) => {
    return setConfigFreezerAt({
      temp_padrao: target.value,
      temp_max: configFreezerAt.temp_max,
      temp_min: configFreezerAt.temp_min,
      porta_tempo: configFreezerAt.porta_tempo,
    });
  }

  const verifytempMax = ({ target }) => {
    return setConfigFreezerAt({
      temp_padrao: configFreezerAt.temp_padrao,
      temp_max: target.value,
      temp_min: configFreezerAt.temp_min,
      porta_tempo: configFreezerAt.porta_tempo,
    });
  }

  const verifytempMin = ({ target }) => {
    return setConfigFreezerAt({
      temp_padrao: configFreezerAt.temp_padrao,
      temp_max: configFreezerAt.temp_max,
      temp_min: target.value,
      porta_tempo: configFreezerAt.porta_tempo,
    });
  }

  const verifyPortaTempo = ({ target }) => {
    return setConfigFreezerAt({
      temp_padrao: configFreezerAt.temp_padrao,
      temp_max: configFreezerAt.temp_max,
      temp_min: configFreezerAt.temp_min,
      porta_tempo: target.value,
    });
  }

  const postConfig = async () => {
    const dataNewConfig = {
        cliente_id: Number(clienteid),
        freezer_id: Number(id),
        temp_padrao: Number(configFreezerAt.temp_padrao),
        temp_min: Number(configFreezerAt.temp_min),
        temp_max: Number(configFreezerAt.temp_max),
        porta_tempo: Number(configFreezerAt.porta_tempo),
    }
    console.log(dataNewConfig);
    const toPostConfig = await postConfigFreezer(dataNewConfig);
    console.log(toPostConfig);
    return toPostConfig;
  }

  return (
    <section>
      <div className="divTempConfig">
        <label className="labelConfigFreezer">
          <p>Temp. Padrão:</p>
          <input type="number" className="inputConfig" onChange={ verifytempPadrao } value={configFreezerAt.temp_padrao} />
        </label>
        <label className="labelConfigFreezer">
          <p>Temp. Max.:</p>
          <input type="number" className="inputConfig" onChange={ verifytempMax }  value={configFreezerAt.temp_max}/>
        </label>
        <label className="labelConfigFreezer">
          <p>Temp. Min.:</p>
          <input type="number" className="inputConfig" onChange={ verifytempMin }  value={configFreezerAt.temp_min}/>
        </label>
        <label className="labelConfigFreezer">
          <p>Limite de Tempo para Porta Aberta:</p>
          <input type="number" className="inputConfig" onChange={ verifyPortaTempo }  value={configFreezerAt.porta_tempo}/>
        </label>
        <button type="button" onClick={ postConfig }>Aplicar Mudanças</button>
      </div>
    </section>
  )
}

export default FreezerConfigComp;