import React, { useEffect, useState } from 'react';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import HeaderComp from '../Components/HeaderComp.js';
import imgConfig from '../Imagens/Configs.png'
import FreezerComp from '../Components/FreezerComp.js';

function Painel() {
  const navigate = useNavigate();
  const idCliente = 1;
  const qntFreezers = 30;
  const components = [];

  const goToConfig = () => {
    return navigate(`/planta/${id}/config`);
  }
  
  const { id } = useParams();

  const catchAllFreezers = () => {
    console.log(id);
    for (let i = 1; i <= qntFreezers; i++) {
      components.push(i);
    }
  }

  useEffect(() => catchAllFreezers(), []);

  return (
    <main className="homePage">
      <HeaderComp />
      <h1>Painel da Planta {id}</h1>
      <div className="divConfig">
        <img src={imgConfig} alt="Configurações" className="imgConfig" onClick={goToConfig} />
      </div>
      {
        [...Array(qntFreezers)].map((_, index) => {
        if (Number(id) === 1) {
          if (index < (id * 15)) {
            return <FreezerComp clienteId={idCliente} freezerId={index + 1} key={index} />
          }
          return null;
        }
        if (index < (Number(id) * 15 - 15)) {
          return <FreezerComp clienteId={idCliente} freezerId={id * 15 - 15 + (index + 1)} key={index} />
        }
        return null;
        })
      }
    </main>
  )
}

export default Painel;