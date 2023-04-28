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
  const [startIndex, setStartIndex] = useState(0);

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

  useEffect(() => {
    setStartIndex((Number(id) - 1) * 15); catchAllFreezers()
  }, [id]);

  const elementosPorPagina = 15;
  const paginaAtual = Number(id);

  // Crie uma lista com os números dos elementos a serem renderizados
  const elementos = Array.from({ length: elementosPorPagina }, (_, index) => index + 1 + (paginaAtual - 1) * elementosPorPagina);

  // Divida a lista de elementos em grupos de 5
  const grupos = elementos.reduce((acc, curr, index) => {
    if (index % 5 === 0) {
      acc.push([]);
    }
    acc[acc.length - 1].push(curr);
    return acc;
  }, []);

  return (
    <main className="homePage">
      <HeaderComp />
      <h1>Painel da Planta {id}</h1>
      <div className="divConfig">
        <img src={imgConfig} alt="Configurações" className="imgConfig" onClick={goToConfig} />
      </div>
      <div className='dispFreezer'>
        {grupos.map((grupo, index) => (
          <div className={index === 0 ? 'uEsquerda' : index === 1 ? 'uBaixo' : 'uDireita'} key={index}>
            {grupo.map(elemento => (
              <FreezerComp clienteId={idCliente} freezerId={paginaAtual * 15 - 15 + elemento} key={elemento} />
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}

export default Painel;
