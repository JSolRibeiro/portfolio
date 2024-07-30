import styles from './Cards.module.css'
import ButtonB from './ButtonB'
import ButtonA from './ButtonA'
import { useState, useEffect, useRef } from 'react'
function Card({ image, title, techs, description, repo, site }) {
    const [mostrar, setMostrar] = useState(false);
    const cardData = useRef()

    const exibir = () => {
        setMostrar(!mostrar);
    }

    useEffect(() => {
        if (mostrar) {
          const scrollHeight = cardData.current.scrollHeight;
          cardData.current.style.height = `${scrollHeight}px`;
        } else {
          cardData.current.style.height = '0px';
        }
      }, [mostrar]);

    return (

        <div className={styles.card} onClick={exibir} onMouseLeave={() => setMostrar(false)}>


            <img src={image} title={title} alt='Erro' />

            
                <section ref={cardData} className={`${styles.cardData} ${mostrar ? styles.cardDataHover : ''}`}>
                    <h1 className={styles.titleCard}>{title}</h1>
                    <strong>Tecnologias:</strong><p>{techs}</p>
                    <p>{description}</p>
                    <div className={styles.buttons}>
                        <ButtonA Text={"Acesse o site"} link={site} />
                        <ButtonB Text={"acesse o repositório"} link={repo} />
                    </div>

                </section>

        </div>
    )
}
export default Card