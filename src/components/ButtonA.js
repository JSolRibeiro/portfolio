import styles from '../components/ButtonA.module.css'
function ButtonA({ Text, link }) {
    return (
        <a href={link} target='_blank' rel='noreferrer'>
            <button className={styles.btn}>{Text}</button>
        </a>
    )
}
export default ButtonA