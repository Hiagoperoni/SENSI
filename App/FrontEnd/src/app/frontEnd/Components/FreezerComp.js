import React from 'react';
import { useNavigate } from 'react-router-dom';
import alertaImg from '../Imagens/Alerta.png';

function FreezerComp(props) {
  let navigate = useNavigate();

  const tudo = props;

  const paginaProduto = () => {
    return navigate(`/produto/${props.id}`)
  }
  
  return (
    <section className="geralProd freezerProd" onClick={ () => paginaProduto(tudo) }>
      <h3>Freezer {props.id}</h3>
      <div className="dataFreezer">
      <p>Temp: {props.temp}Cº</p>
      <p>Porta {props.porta}</p>
      {
        (props.temp < -10 || props.temp > -6) || props.porta === 'Aberta' ?
        <img src={ alertaImg } alt="alerta" className="imgAlerta"/>
        : null
      }
      </div>
    </section>
  )
}

export default FreezerComp;