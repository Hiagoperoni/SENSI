import React from 'react';
import HeaderComp from '../Components/HeaderComp';

function ZoomProd(props) {
  const verProps = () => {
    console.log(props);
  }

  return(
    <main className="homePage">
      <HeaderComp />
      <h1>Freezer 1</h1>
      <div className="divZoomFreezer">
        <div className="dataZoomFreezer">
          <h2 className="geralProd">Status Atual</h2>
          <div className="geralProd">
            <h3>Temperatura Atual: -7ºC</h3>
            <h3>Porta Fechada</h3>
          </div>
        </div>
        <div>
          <p> </p>
        </div>
        <div className="dataZoomFreezer">
          <h2 className="geralProd">Erros</h2>
          <div className="geralProd">
            <h3>Temperatura Fora do Limite</h3>
            <h2>Horario x x</h2>
            <h3>Porta Aberta</h3>
            <h2>Horario x x</h2>
          </div>
        </div>
      </div>
      <button type="button" onClick={ verProps }>Resetar</button>
    </main>
  )
}

export default ZoomProd;