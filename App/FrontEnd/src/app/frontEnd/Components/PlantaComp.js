import React from 'react';
import { useNavigate } from 'react-router-dom';

function PlantaComp(props) {
  const { id } = props;
  let navigate = useNavigate();

  const paginaProduto = () => {
    return navigate(`/planta/${id}`);
  }

  return (
      <section className="geralProd" onClick={ paginaProduto }>
        <p>Planta {id}</p>
        <p>Imagem Planta {id}</p>
      </section>
  )
}

export default PlantaComp;