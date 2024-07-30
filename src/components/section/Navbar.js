import styles from './Navbar.module.css';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
function Navbar() {

    const [isActive, setIsActive] = useState(false);

    const toogleActivate = () => {
        setIsActive(!isActive);
    }

    return (
        <div>
            <div className={styles.navbar}>
                <ul>
                    <li><Nav.Link href='#presentationSection'>Apresentação</Nav.Link></li>
                    <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                    <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                </ul>
                <ul>
                    <li><a href='https://www.instagram.com/jsol.design/' target='_blank' rel='noreferrer'><FaInstagram size={30} /></a></li>
                    <li><a href='https://github.com/JSolRibeiro?tab=repositories' target='_blank' rel='noreferrer'><FaGithub size={30} /></a></li>
                    <li><a href='https://www.linkedin.com/in/jsoldesigner/' target='_blank' rel='noreferrer'><FaLinkedin size={30} /></a></li>
                </ul>
            </div>
            <div className={styles.mobileMenu}>
                <div className={styles.MobileButton}>
                    <span className={styles.mobileMenuIcon} onClick={toogleActivate}>&#9776;</span>
                </div>
                <div className={`${styles.sidenav} ${isActive ? styles.mySideNav : ''}`}>
                    <a href="#f" onClick={toogleActivate} className={`${styles.closebtn}`}>&times;</a>
                    <a href="#presentationSection">Apresentação</a>
                    <a href="#Skills">Habilidades</a>
                    <a href="#Projects">Projetos</a>
                    <div className={styles.social}>
                        <a href='https://www.instagram.com/jsol.design/' target='_blank' rel='noreferrer'><FaInstagram size={30} /></a>
                        <a href='https://www.linkedin.com/in/jsoldesigner/' target='_blank' rel='noreferrer'><FaLinkedin size={30} /></a>
                        <a href='https://github.com/JSolRibeiro?tab=repositories' target='_blank' rel='noreferrer'><FaGithub size={30} /></a>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Navbar