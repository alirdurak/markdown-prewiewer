import styles from "../styles/text-area.module.scss"
export default function PrewiewArea(){
    return <>
    <textarea className={styles.textarea} readOnly name="" id="" cols="30" rows="10"></textarea>    
    </>
}