import { useState, useEffect } from 'react';

import styles from './style.module.css';

const SignUp = () => {
  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');

  function cadastrar(){
    alert("CLICOU")
  }

  return (
    <div className={styles.main_container}>
      <h2>Crie aqui sua conta de acesso</h2>
      <form onSubmit={cadastrar}>
        <label >
          <span>Nome:</span>
          <input type="text" name="nome" value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite seu Nome..." required/>
        </label>
        <label>
          <span>Login:</span>
          <input type="text" name='login' value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Digite um Login..." required />
        </label>
        <label >
          <span>Senha:</span>
          <input type="password" name="senha" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Digite sua Senha..." required />
        </label>
        <label >
          <span>Confirme a Senha:</span>
          <input type="password" name="confirmSenha" value={confirmSenha} onChange={e => setConfirmSenha(e.target.value)} placeholder="Confirme a sua Senha..." required />
        </label>
        <button className='btn'>Cadastrar</button>
      </form>
    </div>
  )
}

export default SignUp