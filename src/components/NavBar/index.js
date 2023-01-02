import { NavLink } from 'react-router-dom';

import styles from './style.module.css';

import logo from '../../img_logos/Logo.PNG';

const NavBar = () => {
  return (
    <div className="nav">
      <div className={styles.nav_container}>
        <NavLink to='/home'>
          <span className={styles.logo}>
            <img className={styles.img} src={logo} alt="Logo" title="Clique para saber mais" />
            Controle Patrimonial</span>
        </NavLink>
      </div>
    </div>
  )
}

export default NavBar;