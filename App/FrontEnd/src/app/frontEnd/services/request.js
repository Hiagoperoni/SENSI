import axios from 'axios';
// import React from 'react';

// const client = axios.create({ baseURL: 'http://ec2-54-144-177-213.compute-1.amazonaws.com:3300/' });
const client = axios.create({ baseURL: 'http://localhost:3300/' });

const getFreezer = async (idCliente, idFreezer) => {
  const dataFreezer = await client.get(`${idCliente}/${idFreezer}`);
  return dataFreezer;
};

const postConfigFreezer = async ({
  cliente_id,
  freezer_id,
  porta_tempo,
  temp_min,
  temp_max,
  temp_padrao,
}) => {
  const dataConfig = await client.post('freezer/config', {
    cliente_id,
    freezer_id,
    porta_tempo,
    temp_min,
    temp_max,
    temp_padrao,
  }, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return dataConfig;
}


const getConfigFreezer = async (clienteId, freezerId) => {
  const dataConfig = await client.get(`freezer/config/${clienteId}/${freezerId}`);
  return dataConfig;
}

const loginUser = async (email, password) => {
  const logged = await client.post('login', {
      email,
      password,
  });
  if (typeof logged.data === 'number') {
    logged.request.user = logged.data;
    return true;
  }
  return false;
}

export {
  loginUser,
  getFreezer,
  postConfigFreezer,
  getConfigFreezer,
}