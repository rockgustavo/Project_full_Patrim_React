import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../contents/user';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { toast } from "react-toastify";

import api from '../../services/api';

import styles from './style.module.css';

const Usuario = () => {
  const [user_id, setUser_id] = useState(0);
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [rg, setRg] = useState('');
  const [cpf, setCpf] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const [error, setError] = useState('');
  const [btnSalvar, setbtnSalvar] = useState(false);  // CREATE

  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    if (!(Object.values(user).length === 0)) {
      setUser_id(user.user_id);
      setNome(user.nome);
      setCargo(user.cargo);
      setRg(user.rg);
      setCpf(user.cpf);
      setLogin(user.login);
      setbtnSalvar(true); // UPDATE
    }
  }, [user])

  function salvar(e) {
    e.preventDefault();

    if (btnSalvar) {
      confirmDialog({
        message: `Você confirma atualizar este usuário ?`,
        header: 'Atualização de dados!',
        icon: 'pi pi-exclamation-triangle',
        accept: () => atualizar(),
        reject: () => { console.log("REJECT") },
      });
    } else {
      confirmDialog({
        message: `Você confirma inserir este usuário ?`,
        header: 'Inserir no sistema!',
        icon: 'pi pi-info-circle',
        acceptClassName: 'p-button-danger',
        accept: () => criarNovo(),
        reject: () => { console.log("REJECT") },
      });
    }
  }

  async function criarNovo() {
    setError('');

    const date = {
      nome,
      cargo,
      rg,
      cpf,
      login,
      senha,
      situacao: true,
      date_create: new Date(),
      date_update: new Date(),
    }

    await api
      .post("/usuario", date)
      .then((response) => response.data)
      .then(
        toast.success("Inserido com sucesso!"),
        setUser(date)
      )
      .catch((err) => {
        setError('criarNovo()!');
        toast.error("Erro: " + err)
      });
  }

  async function atualizar() {
    setError('');

    const date = {
      user_id,
      nome,
      cargo,
      rg,
      cpf,
      login,
      senha,
      situacao: user.situacao,
      date_create: user.date_create,
      date_update: new Date(),
      setor: user.setor
    }

    await api
      .put("/usuario", date)
      .then((response) => response.data)
      .then(toast.success("Atualizado com sucesso!"))
      .then(setUser(date))
      .catch((err) => {
        setError('Usuario não encontrado!');
        toast.error("Usuario não encontrado!");
      });
  }

  function limpaCampos() {
    setUser_id(0);
    setNome('');
    setCargo('');
    setRg('');
    setCpf('');
    setLogin('');
    setSenha('');

    setUser({})
    setbtnSalvar(false);
  }

  return (
    <div className={styles.container}>
      <h2>Usuário</h2>
      {!btnSalvar &&
        <span className="statusCreate">Inserindo Novo</span>
      }
      {btnSalvar &&
        <span className="statusUpdate">Atualizando</span>
      }
      <form onSubmit={salvar}>
        <label>
          <span>Nome</span>
          <input type="text" name='nome' value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o Nome..." required />
        </label>
        <label>
          <span>Cargo</span>
          <input type="text" name='cargo' value={cargo} onChange={(e) => setCargo(e.target.value)} placeholder="Digite o Cargo..." required />
        </label>
        <label>
          <span>RG</span>
          <input type="text" name='rg' value={rg} onChange={(e) => setRg(e.target.value)} placeholder="Digite o Rg..." required />
        </label>
        <label>
          <span>CPF</span>
          <input type="text" name='cpf' value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Digite o Cpf..." required />
        </label>
        <label>
          <span>Login</span>
          <input type="text" name='login' value={login} onChange={(e) => setLogin(e.target.value)} placeholder="Digite o Login..." required />
        </label>
        <label>
          <span>Senha</span>
          <input type="password" name='senha' value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="Digite a Senha..." required />
        </label>
        <div className="painel">
          <Button className='btn update' label="Salvar" type='submit' />
          <ConfirmDialog />
          <button className='btn info' onClick={limpaCampos}>Limpar</button>
        </div>
      </form>
      {error &&
        <p className={styles.error}>{error}</p>
      }
    </div>
  )
}

export default Usuario;