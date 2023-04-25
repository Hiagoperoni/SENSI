import React from 'react';
import { useNavigate } from 'react-router-dom';

function PlantaComp() {
  let navigate = useNavigate();
  const paginaProduto = () => {
    return navigate("/produto");
  }

  return (
      <section className="geralProd" onClick={ paginaProduto }>
        <p>Planta X</p>
        <p>Imagem Planta X</p>
      </section>
  )
}

export default PlantaComp;