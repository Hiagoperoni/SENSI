import React, { useEffect, useState } from 'react';
import HeaderComp from '../Components/HeaderComp';
import FreezerConfigComp from '../Components/FreezerConfig';

function Config() {
  const idCliente = 1;
  const [qntFrezzers, setQntFreezers] = useState(30);
  const numComponents = [];

  const catchAllFreezers = () => {
    for (let i = 1; i <= qntFrezzers; i++) {
      numComponents.push(i);
    }
  }

  useEffect(() => catchAllFreezers(), []);

  return (
    <main>
      <HeaderComp />
      <h1>Página de Configuração</h1>
      <FreezerConfigComp clienteId={idCliente} freezerId={1} key={1} />
      <div className="freezerPageConfig">
        {
        [...Array(qntFrezzers)].map((_, index) => (
          <FreezerConfigComp clienteId={idCliente} freezerId={index + 1} key={index} />
        ))
      }
      </div>
      <button type="button" onClick={() => console.log(numComponents)}>Aplicar Mudanças</button>
    </main>
  )
}

export default Config;
