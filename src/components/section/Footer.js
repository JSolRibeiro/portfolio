import ButtonB from '../ButtonB'
import styles from './Footer.module.css'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.buttonMobile}>
                <ButtonB
                    Text={"Ver repositório Completo"}
                    link={"https://github.com/JSolRibeiro?tab=repositories"}
                />
            </div>

            <ul className={styles.footerMenu}>
                <li><a href='https://www.instagram.com/jsol.design/' target='_blank' rel='noreferrer' title='Instagram'><FaInstagram size={30} /></a></li>
                <li><a href='https://github.com/JSolRibeiro?tab=repositories' target='_blank' rel='noreferrer' title='GitHub'><FaGithub size={30} /></a></li>
                <li><a href='https://www.linkedin.com/in/jsoldesigner/' target='_blank' rel='noreferrer' title='Linkedin'><FaLinkedin size={30} /></a></li>
            </ul>
            <ul className={styles.dataContact}>
                <li><p>jsolmidia@gmail.com</p></li>
                <li><p>João Sol © 2024</p></li>
            </ul>
        </div>
    )
}
export default Footer