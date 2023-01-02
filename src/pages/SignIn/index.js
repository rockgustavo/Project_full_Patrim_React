import { useState, useEffect } from 'react';

import { useNavigate } from "react-router-dom";

import api from '../../services/api';

import styles from './style.module.css';

const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  async function logar(e) {
    e.preventDefault();
    setError('');

    const date = {
      login,
      senha
    }

    const response = await api
      .post("/usuario/login", date)
      .then((response) => response.data)
      .catch((err) => {
        setError('Usuario não encontrado!')
        console.error("Usuario não encontrado!");
      });

    if (response.login === login && response.senha === senha) {
      console.log("Logado com sucesso");
      navigate("/home");
    } else {
      setError('Senha inválida');
    }
  }

  return (
    <div className={styles.login_container}>
      <h2>Autenticação de usuário</h2>
      <form onSubmit={logar}>
        <label>
          <span>Login:</span>
          <input type="text" name='login' value={login} onChange={e => setLogin(e.target.value)} placeholder="Digite seu Login..." required />
        </label>
        <label >
          <span>Senha:</span>
          <input type="password" name="senha" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Digite sua Senha..." required />
        </label>
        <button id={styles.logar} className='btn'>Logar</button>
      </form>
      {error &&
        <p className={styles.error}>{error}</p>
      }
    </div>
  )
}

export default SignIn