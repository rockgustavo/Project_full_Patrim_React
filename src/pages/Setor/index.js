import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../contents/user';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { toast } from "react-toastify";

import api from '../../services/api';

import styles from './style.module.css';

const Setor = () => {
  const [setor_id, setSetor_id] = useState(0);
  const [nome, setNome] = useState('');
  const [area, setArea] = useState('');

  const [error, setError] = useState('');
  const [btnSalvar, setbtnSalvar] = useState(false);  // CREATE

  const { setor, setSetor } = useContext(UserContext);
  useEffect(() => {
    if (!(Object.values(setor).length === 0)) {
      setSetor_id(setor.setor_id);
      setNome(setor.nome);
      setArea(setor.area);
      setbtnSalvar(true); // UPDATE
    }
  }, [setor])


  function salvar(e) {
    e.preventDefault();

    if (btnSalvar) {
      confirmDialog({
        message: `Você confirma atualizar este setor ?`,
        header: 'Atualização de dados!',
        icon: 'pi pi-exclamation-triangle',
        accept: () => atualizar(),
        reject: () => { console.log("REJECT") },
      });
    } else {
      confirmDialog({
        message: `Você confirma inserir este setor ?`,
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
      situacao: true,
      nome,
      area,
      date_create: new Date(),
      date_update: new Date(),
    }

    await api
      .post("/setor", date)
      .then((response) => response.data)
      .then(
        toast.success("Inserido com sucesso!"),
        setSetor(date)
      )
      .catch((err) => {
        setError('criarNovo()!');
        toast.error("Erro: " + err)
      });
  }

  async function atualizar() {
    setError('');

    const date = {
      setor_id,
      situacao: setor.situacao,
      nome,
      area,
      date_create: setor.date_create,
      date_update: new Date(),
      usuarios: setor.setor
    }

    await api
      .put("/setor", date)
      .then((response) => response.data)
      .then(toast.success("Atualizado com sucesso!"),
        setSetor(date))
      .catch((err) => {
        setError('Setor não encontrado!');
        toast.error("Setor não encontrado!");
      });
  }

  function limpaCampos() {
    setSetor_id(0);
    setNome('');
    setArea('');
    setSetor({});
    setbtnSalvar(false);
  }

  return (
    <div className={styles.container}>
      <h2>Setor</h2>
      {!btnSalvar &&
        <span className="statusCreate">Inserindo Novo</span>
      }
      {btnSalvar &&
        <span className="statusUpdate">Atualizando</span>
      }
      <form onSubmit={salvar}>
        <label>
          <span>Nome</span>
          <input type="text" name='nome' value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite o nome do setor..." required />
        </label>
        <label>
          <span>Área</span>
          <input type="text" name='area' value={area} onChange={(e) => setArea(e.target.value)} placeholder="Digite a área..." required />
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

export default Setor;