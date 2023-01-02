import { useContext, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Ripple } from 'primereact/ripple';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';

import api from '../../services/api';
import { toast } from "react-toastify";

import { UserContext } from '../../contents/user'
import styles from './style.module.css';

const SetorList = () => {
  const [selectedCustomers, setSelectedCustomers] = useState();
  const navigate = useNavigate();

  const [customers, setCustomers] = useState([]);
  const [first1, setFirst1] = useState(0);
  const [rows1, setRows1] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageInputTooltip, setPageInputTooltip] = useState('Press \'Enter\' key to go to this page.');

  useEffect(() => {
    loadDados();

  }, []);
  
  async function loadDados() {
    const response = await api
      .get("/setor")
      .then((response) => response.data)
      .catch((err) => {
        console.error("Setores não encontrado!");
      });
    setCustomers(response);
  }

  const onCustomPage1 = (event) => {
    setFirst1(event.first);
    setRows1(event.rows);
    setCurrentPage(event.page + 1);
  }


  const onPageInputKeyDown = (event, options) => {
    if (event.key === 'Enter') {
      const page = parseInt(currentPage);
      if (page < 1 || page > options.totalPages) {
        setPageInputTooltip(`Value must be between 1 and ${options.totalPages}.`);
      }
      else {
        const first = currentPage ? options.rows * (page - 1) : 0;

        setFirst1(first);
        setPageInputTooltip('Press \'Enter\' key to go to this page.');
      }
    }
  }

  const onPageInputChange = (event) => {
    setCurrentPage(event.target.value);
  }

  const template1 = {
    layout: 'PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport',
    'PrevPageLink': (options) => {
      return (
        <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
          <span className="p-3">Previous</span>
          <Ripple />
        </button>
      )
    },
    'NextPageLink': (options) => {
      return (
        <button type="button" className={options.className} onClick={options.onClick} disabled={options.disabled}>
          <span className="p-3">Next</span>
          <Ripple />
        </button>
      )
    },
    'PageLinks': (options) => {
      if ((options.view.startPage === options.page && options.view.startPage !== 0) || (options.view.endPage === options.page && options.page + 1 !== options.totalPages)) {
        const className = classNames(options.className, { 'p-disabled': true });

        return <span className={className} style={{ userSelect: 'none' }}>...</span>;
      }

      return (
        <button type="button" className={options.className} onClick={options.onClick}>
          {options.page + 1}
          <Ripple />
        </button>
      )
    },
    'RowsPerPageDropdown': (options) => {
      const dropdownOptions = [
        { label: 5, value: 5 },
        { label: 10, value: 10 },
        { label: 'All', value: options.totalRecords }
      ];

      return <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />;
    },
    'CurrentPageReport': (options) => {
      return (
        <span className="mx-3" style={{ color: 'var(--text-color)', userSelect: 'none' }}>
          Go to <InputText size="2" className="ml-1" value={currentPage} tooltip={pageInputTooltip}
            onKeyDown={(e) => onPageInputKeyDown(e, options)} onChange={onPageInputChange} />
        </span>
      )
    }
  };

  const { setSetor } = useContext(UserContext);

  function update() {
    console.log(selectedCustomers)
    if (selectedCustomers) {
      setSetor(selectedCustomers)
      navigate("/setor", selectedCustomers);
    }
  }

  const deletar = () => {
    if (selectedCustomers) {
      confirmDialog({
        message: `Você confirma deletar o ID: ${selectedCustomers.setor_id} - ${selectedCustomers.nome} ?`,
        header: 'Confirmar Exclusão!',
        icon: 'pi pi-info-circle',
        acceptClassName: 'p-button-danger',
        accept: () => deletarSetor(),
        reject: () => { console.log("REJECT") },
      });
    }
  }

  async function deletarSetor() {
    await api
      .delete(`/setor/${selectedCustomers.setor_id}`)
      .then((response) => response.data)
      .then(() => loadDados())
      .then(toast.success("Deletado com sucesso!"))
      .catch((err) => {
        toast.error("Erro: " + err)
      });
  }

  return (
    <div className={styles.container}>
      <h2>Lista de Setores</h2>
      <DataTable className={styles.lista} value={customers}
        scrollHeight="50vh"
        paginator paginatorTemplate={template1} first={first1} rows={rows1}
        onPage={onCustomPage1} responsiveLayout="scroll"
        rowHover selection={selectedCustomers} responsive="true"
        onSelectionChange={e => setSelectedCustomers(e.value)}
        emptyMessage="Não há setores na base">
        <Column selectionMode="single" selectionAriaLabel="name" headerStyle={{ width: '3em' }}></Column>
        <Column field="setor_id" header="ID" style={{ width: '2%' }}></Column>
        <Column field="nome" header="Setor"></Column>
        <Column field="area" header="Área"></Column>
        <Column className={styles.colunaFull} field="situacao" header="Ativo"></Column>
      </DataTable>
      <div className={styles.painel}>
        <button className='btn update' onClick={update}>Atualizar</button>
        <Button className='btn delete' label="Deletar" onClick={deletar} />
        <ConfirmDialog />
      </div>
    </div>
  );
}

export default SetorList;