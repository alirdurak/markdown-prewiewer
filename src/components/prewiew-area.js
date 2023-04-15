import styles from "../styles/text-area.module.scss"
import ReactMarkdown from 'react-markdown';
import { useSelector } from "react-redux";
export default function PrewiewArea(){
    const text = useSelector(state => state.markdown.text)
    return <>
    <ReactMarkdown className={styles.textarea}>{text}</ReactMarkdown>   
    </>
}