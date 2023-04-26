import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/request';

function Login() {
  const [loginUsuario, setLoginUsuario] = useState('');
  const [passwordUser, setPasswordUser] = useState('');
  const [erroLogin, setErroLogin] = useState();
  let navigate = useNavigate();

  const verifyUser = ({ target }) => {
    setLoginUsuario(target.value);
  }

  const verifyPassword = ({ target }) => {
    setPasswordUser(target.value);
  }

  const verifyLogin = async () => {
    try {
      const logged = await loginUser(loginUsuario, passwordUser);
      console.log(logged);
      return navigate('/home');
    } catch (e) {
      return setErroLogin('E-mail e/ou Senha inválido(s)!');
    }
  }

  return (

    <main className="homePage">
      <div>
        <h1>SENSI</h1>
      </div>
      <input type="text" placeholder='Login'onChange={ verifyUser } />
      <input type="password" placeholder='Senha'onChange={ verifyPassword } />
      <button type="button" onClick={ verifyLogin }>Entrar</button>
      {
        erroLogin && <p>{ erroLogin }</p>
      }
    </main>
  )
}

export default Login;