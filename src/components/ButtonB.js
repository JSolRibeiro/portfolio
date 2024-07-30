import styles from '../components/ButtonB.module.css'
function ButtonB({ Text, link }) {
    return (
        <a href={link} target='_blank' rel='noreferrer'>
            <button className={styles.btn}>{Text}</button>
        </a>
    )
}
export default ButtonB