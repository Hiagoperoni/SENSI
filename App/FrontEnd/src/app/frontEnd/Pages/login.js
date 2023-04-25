import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [loginUser, setLoginUser] = useState('');
  const [passwordUser, setPasswordUser] = useState('');
  let navigate = useNavigate();

  const verifyUser = ({ target }) => {
    setLoginUser(target.value);
  }

  const verifyPassword = ({ target }) => {
    setPasswordUser(target.value);
  }

  const verifyLogin = () => {
    if (loginUser === 'loginCerto' && passwordUser === "123456") {
      return navigate("/home");
    }
    return global.alert('Login ou Senha incorretos');
  }

  return (

    <main className="homePage">
      <div>
        <h1>CLP</h1>
      </div>
      <input type="text" placeholder='Login'onChange={ verifyUser } />
      <input type="password" placeholder='Senha'onChange={ verifyPassword } />
      <button type="button" onClick={ verifyLogin }>Entrar</button>
    </main>
  )
}

export default Login;