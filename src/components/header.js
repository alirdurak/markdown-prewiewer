import { useState } from "react";
import { useDispatch } from "react-redux";
import { sampleMarkdown,clearText } from "@/redux/markdown-slice";
import styles from "../styles/header.module.scss";
import { IconContext } from "react-icons";
import { FaQuestionCircle } from "react-icons/fa";

export default function Header() {
    const dispatch = useDispatch()
    const [isSample,setIsSample] = useState(false)
    const handleClick = ()=>{
        if(isSample){
            dispatch(clearText())
            setIsSample(false)
        }else{
            dispatch(sampleMarkdown())
            setIsSample(true)
        }
    }

  return (
    <div className={styles.header}>
      <div>
        <h1>Markdown Prewiewer</h1>
      </div>
      <IconContext.Provider
        size
        value={{ size: "3rem", className: styles.icon }}
      >
        <FaQuestionCircle onClick={handleClick} />
      </IconContext.Provider>
    </div>
  );
}
