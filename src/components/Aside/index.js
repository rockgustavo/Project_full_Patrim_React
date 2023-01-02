import { NavLink } from 'react-router-dom';

import styles from './style.module.css';

const Aside = () => {
  return (
    <div className="aside">
      <aside className={styles.aside_container}>
        <ul>
          <li className={styles.grupo}>
            <NavLink to='/home' className={({ isActive }) => (isActive ? styles.active : "")}>
              Home
            </NavLink>
          </li>
          <div className={styles.grupo}>
            <span>Usuario</span>
            <li>
              <NavLink to='/usuario' className={({ isActive }) => (isActive ? styles.active : "")}>
                Cadastro
              </NavLink>
            </li>
            <li>
              <NavLink to='/usuarioList' className={({ isActive }) => (isActive ? styles.active : "")}>
                Lista
              </NavLink>
            </li>
          </div>
          <div className={styles.grupo}>
            <span>Setor</span>
            <li>
              <NavLink to='/setor' className={({ isActive }) => (isActive ? styles.active : "")}>
                Cadastro
              </NavLink>
            </li>
            <li>
              <NavLink to='/setorList' className={({ isActive }) => (isActive ? styles.active : "")}>
                Lista
              </NavLink>
            </li>
          </div>
          <div className={styles.grupo}>
            <span>Patrimônio</span>
            <li>
              <NavLink to='/patrimonio' className={({ isActive }) => (isActive ? styles.active : "")}>
                Cadastro
              </NavLink>
            </li>
            <li>
              <NavLink to='/patrimonioList' className={({ isActive }) => (isActive ? styles.active : "")}>
                Lista
              </NavLink>
            </li>
          </div>
          {/*  
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : "")}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to='/register' className={({ isActive }) => (isActive ? styles.active : "")}>
              Register
            </NavLink>
          </li>
          */}
        </ul>
      </aside>
    </div>
  )
}

export default Aside;