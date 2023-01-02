import styles from './style.module.css';

//Logos
import uml from '../../img_logos/Uml.png';
import java from '../../img_logos/Java.svg';
import spring from '../../img_logos/Spring.png';
import hibernate from '../../img_logos/Hibernate.jpg';
import restful from '../../img_logos/Restful.jpg';
import mysql from '../../img_logos/Mysql.svg';
import react from '../../img_logos/React.svg';
import hmtl5 from '../../img_logos/Html5.svg';
import css3 from '../../img_logos/Css3.svg';
import primfaces from '../../img_logos/Primefaces.svg';
import aws from '../../img_logos/Aws.svg';
import ubuntu from '../../img_logos/Ubuntu.svg';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>Tecnologias apresentadas neste projeto</h1>
      <ul>
        <li>
          <a href="https://www.uml.org/" target="_blank" rel="noreferrer noopener">
            <img src={uml} alt="UML" title="Clique para saber mais" /></a>
        </li>
        <li>
          <a href="https://dev.java/" target="_blank" rel="noreferrer noopener">
            <img src={java} alt="Java" title="Clique para saber mais" /></a>
        </li>
        <li>
          <a href="https://projects.spring.io/spring-boot/" target="_blank" rel="noreferrer noopener">
            <img src={spring} alt="Spring" title="Clique para saber mais" /></a>
        </li>
        <li>
          <a href="https://aws.amazon.com/pt/what-is/restful-api/" target="_blank" rel="noreferrer noopener">
            <img src={restful} alt="Restful" title="Clique para saber mais" /></a>
        </li>
        <li>
          <a href="http://hibernate.org/orm/" target="_blank" rel="noreferrer noopener">
            <img src={hibernate} alt="Hibernate" title="Clique para saber mais" /></a>
        </li>
        <li>
          <a href="https://www.mysql.com/" target="_blank" rel="noreferrer noopener">
            <img src={mysql} alt="Mysql" title="Clique para saber mais" /></a>
        </li>
        <li>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">
            <img src={react} alt="React" title="Clique para saber mais" /></a>
        </li>
        <li>
          <a href="https://www.primefaces.org/primereact/" target="_blank" rel="noreferrer noopener">
            <img src={primfaces} alt="PrimeFaces" title="Clique para saber mais" /></a>
        </li>
        <li>
          <a href="https://www.w3c.br/Cursos/CursoHTML5" target="_blank" rel="noreferrer noopener">
            <img src={hmtl5} alt="Html5" title="Clique para saber mais" /></a>
        </li>
        <li>
          <a href="https://www.w3c.br/Cursos/CursoCSS3/" target="_blank" rel="noreferrer noopener">
            <img src={css3} alt="Css3" title="Clique para saber mais" /></a>
        </li>
        <li>
          <a href="https://aws.amazon.com/what-is-aws/" target="_blank" rel="noreferrer noopener">
            <img src={aws} alt="Aws" title="Clique para saber mais" /></a>
        </li>
        <li>
          <a href="https://ubuntu.com/" target="_blank" rel="noreferrer noopener">
            <img src={ubuntu} alt="Ubuntu" title="Clique para saber mais" /></a>
        </li>
      </ul>
    </div>
  )
}

export default Home;