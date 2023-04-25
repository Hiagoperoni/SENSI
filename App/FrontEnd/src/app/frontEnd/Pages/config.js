import React from 'react';
import HeaderComp from '../Components/HeaderComp';
import gerarFreezers from '../../backEnd/teste/gerarFreezers';

function Config() {
  return(
    <main>
      <HeaderComp />
      <h1>Página de Configuração</h1>
      <div className="freezerPageConfig">
        {
          gerarFreezers.map((cadaFreezer) => {
            return (
              <section key={ cadaFreezer.id } className="freezerConfig">
                <h2>Freezer { cadaFreezer.id }</h2>
                <div className="divTempConfig">
                  <label className="labelConfigFreezer">
                    <p>Temp. Padrão:</p>
                    <input type="number" className="inputConfig"/>
                  </label>
                  <label className="labelConfigFreezer">
                    <p>Tolerância Temp.:</p>
                    <input type="number" className="inputConfig"/>
                  </label>
                </div>
                <label className="labelConfigFreezer">
                  <p>Limite de Tempo para Porta Aberta:</p>
                  <input type="number" className="inputConfig"/>
                </label>
              </section>
            )
          })
        }
      </div>
      <button type="button">Aplicar Mudanças</button>
    </main>
  )
}

export default Config;