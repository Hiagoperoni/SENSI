import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderComp from '../Components/HeaderComp.js';
import imgConfig from '../Imagens/Configs.png'
import FreezerComp from '../Components/FreezerComp.js';

function Painel() {
  const navigate = useNavigate();
  const idCliente = 1;
  const qntFreezers = 30;
  const components = [];

  const goToConfig = () => {
    return navigate('/produto/config');
  }

  const catchAllFreezers = () => {
    for (let i = 1; i <= qntFreezers; i++) {
      components.push(i);
    }
  }

  useEffect(() => catchAllFreezers(), []);

  return (
    <main className="homePage">
      <HeaderComp />
      <h1>Painel da Planta 01</h1>
      <div className="divConfig">
        <img src={imgConfig} alt="Configurações" className="imgConfig" onClick={goToConfig} />
      </div>
      <FreezerComp clienteId={idCliente} freezerId={1} />
      {
        components.map((cadaFreezer) => {
          return <FreezerComp clienteId={idCliente} freezerId={cadaFreezer} key={cadaFreezer} />
        })
      }
    </main>
  )
}

export default Painel;