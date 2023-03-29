import styles from "../styles/header.module.scss"
import { IconContext } from "react-icons"
import {FaQuestionCircle} from "react-icons/fa"

export default function Header(){
    return<div className={styles.header}>
    <div>
        <h1>Markdown Prewiewer</h1>
    </div>
    <IconContext.Provider size value={{ size : "3rem", className:styles.icon}}>
        <FaQuestionCircle />
    </IconContext.Provider>

    </div>
}