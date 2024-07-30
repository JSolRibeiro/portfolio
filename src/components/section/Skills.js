import styles from '../section/Skills.module.css'
import Javascript from '../../img/Javascript.svg'
import Html5 from '../../img/html5.svg';
import Css3 from '../../img/css3.svg';
import React from '../../img/react.svg'
import Typescript from '../../img/typescript.svg'
function Skills() {
    return (
        <div className={styles.Skills} id='Skills'>
            <h1 className={styles.title}>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <ul>
                <li><img src={Javascript} alt="Erro" /></li>
                <li><img src={Html5} alt="Erro" /></li>
                <li><img src={Css3} alt="Erro" /></li>
                <li><img src={React} alt="Erro" /></li>
                <li><img src={Typescript} alt="Erro" /></li>
            </ul>
        </div>
    )
}
export default Skills