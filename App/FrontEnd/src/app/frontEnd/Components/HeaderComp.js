import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderComp() {
  const navigate = useNavigate();
  const goHome = () => {
    return navigate("/home")
  }
  return (
    <header>
      <p>Bem vindo(a), Cliente X</p>
      <button type="button" onClick={ goHome }>Home</button>
      <button>Suporte</button>
      <button>Logout</button>
    </header>
  )
}

export default HeaderComp;