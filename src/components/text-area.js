import styles from "../styles/text-area.module.scss"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { changeText } from "@/redux/markdown-slice";

export default function TextArea () {
  const dispatch = useDispatch()
  const [text, setText] = useState("")

  const handleChange =  e  => {
      setText(e.target.value)
     dispatch(changeText(text))
  }
  return (
    <>
      <textarea onChange={handleChange}  className={styles.textarea}  name="markdown" id="" cols="30" rows="10"></textarea>
    </>
  );
}
