import ButtonA from '../ButtonA';
import Jsol from '../../img/jsol.png';
import styles from './Presentation.module.css';
import { useState, useEffect } from 'react';

function Presentation() {
    const [text, setText] = useState('');
    const toRotate = ['João Sol', 'Dev FullStack', 'Designer Gráfico'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1000;
    const [pause, setPause] = useState(false);

    useEffect(() => {
        if (pause) {
            const pauseTimeOut = setTimeout(() => {
                setPause(false);
                setIsDeleting(true);
            }, pauseTime);
            return () => clearTimeout(pauseTimeOut);
        }

        const ticker = setInterval(() => {
            toType();
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearInterval(ticker)
    });

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (!isDeleting && updatedText === fullText){
            setPause(true);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoop(loop +1);
        }
    };

    return (
        <div className={styles.Presentation} id='presentationSection'>
            <div id={styles.PresentationText}>
                <h4>Bem-vindo ao meu Portfólio</h4>
                <h1>Olá, eu sou <span className={styles.nome}>{text}</span><span className={styles.cursor}> |</span></h1>
                <p>Sou um apaixonado por tecnologia e soluções inovadoras. Como Product Manager,
                    eu tenho o compromisso de resolver problemas complexos e trazer resultados
                    excepcionais para os negócios. Estou sempre em busca de novos desafios para superar.</p>
                <ButtonA Text={"Conecte-se comigo!!"} link={"https://github.com/JSolRibeiro?tab=repositories"} />
            </div>
            <div className={styles.j}>
                <img src={Jsol} id={styles.Foto} alt='Erro' />
            </div>
        </div>
    );
}

export default Presentation;
