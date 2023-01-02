import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../contents/user';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { toast } from "react-toastify";

import api from '../../services/api';

import styles from './style.module.css';

const Patrimonio = () => {
  const [patrim_id, setPatrim_id] = useState(0);
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [registro, setRegistro] = useState('');
  const [foto_url, setFoto_url] = useState('');
  const [complemento, setComplemento] = useState('');

  const [error, setError] = useState('');
  const [btnSalvar, setbtnSalvar] = useState(false);  // CREATE

  const { patrim, setPatrim } = useContext(UserContext);
  useEffect(() => {
    if (!(Object.values(patrim).length === 0)) {
      setPatrim_id(patrim.patrim_id);
      setDescricao(patrim.descricao);
      setValor(patrim.valor);
      setRegistro(patrim.registro_interno);
      setFoto_url(patrim.foto_url_item);
      setComplemento(patrim.dados_comp);
      setbtnSalvar(true); // UPDATE
    }
  }, [patrim])


  function salvar(e) {
    e.preventDefault();

    if (btnSalvar) {
      confirmDialog({
        message: `Você confirma atualizar este item ?`,
        header: 'Atualização de dados!',
        icon: 'pi pi-exclamation-triangle',
        accept: () => atualizar(),
        reject: () => { console.log("REJECT") },
      });
    } else {
      confirmDialog({
        message: `Você confirma inserir este item ?`,
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
      registro_interno: registro,
      foto_url_item: foto_url,
      descricao,
      valor,
      dados_comp: complemento,
      date_create: new Date(),
      date_update: new Date(),
    }

    console.log(date)

    await api
      .post("/patrimonio", date)
      .then((response) => response.data)
      .then(
        toast.success("Item com sucesso!"),
        setPatrim(date)
      )
      .catch((err) => {
        setError('criarNovo()!' + err);
        toast.error("Erro: " + err)
      });
  }

  async function atualizar() {
    setError('');

    const date = {
      patrim_id,
      situacao: patrim.situacao,
      registro_interno: registro,
      foto_url_item: foto_url,
      descricao,
      valor,
      dados_comp: complemento,
      dados_baixa: patrim.dados_baixa,
      date_baixa: patrim.date_baixa,
      date_create: patrim.date_create,
      date_update: new Date(),
      usuario: patrim.usuario
    }

    await api
      .put("/patrimonio", date)
      .then((response) => response.data)
      .then(toast.success("Atualizado com sucesso!"),
        setPatrim(date))
      .catch((err) => {
        setError('Item não encontrado!');
        toast.error("Item não encontrado!");
      });
  }

  function limpaCampos() {
    setPatrim_id(0);
    setDescricao('');
    setValor('');
    setRegistro('');
    setFoto_url('');
    setComplemento('');
    setPatrim({});
    setbtnSalvar(false);
  }

  return (
    <div className={styles.pat_container}>
      <h2>Patrimônio</h2>
      {!btnSalvar &&
        <span className="statusCreate">Inserindo Novo</span>
      }
      {btnSalvar &&
        <span className="statusUpdate">Atualizando</span>
      }
      <form onSubmit={salvar}>
        <label>
          <span>Descricao</span>
          <input type="text" name='descricao' value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Digite a descrição do item..." required />
        </label>
        <label>
          <span>Valor</span>
          <input type="number" name='valor' value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Digite o valor..." required />
        </label>
        <label>
          <span>Registro</span>
          <input type="number" name='rg' value={registro} onChange={(e) => setRegistro(e.target.value)} placeholder="Digite o nº de registro patrimonial..." required />
        </label>
        <label>
          <span>URL Imagem</span>
          <input type="text" name='cpf' value={foto_url} onChange={(e) => setFoto_url(e.target.value)} placeholder="Digite a URL da imagem do item..." required />
        </label>
        <label>
          <span>Complemento</span>
          <textarea type="text" name='cpf' value={complemento} onChange={(e) => setComplemento(e.target.value)} placeholder="Complemento de dados..." />
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

export default Patrimonio;