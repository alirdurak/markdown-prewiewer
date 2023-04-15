import styles from "../styles/text-area.module.scss"
import { useDispatch,useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { changeText } from "@/redux/markdown-slice";

export default function TextArea () {
  const markdown = useSelector(state => state.markdown.text)
  const dispatch = useDispatch()
  const [text, setText] = useState("")
useEffect(()=>{
  dispatch(changeText(text))
},[text])
  const handleChange = async (e)  => {
      setText(e.target.value)
     
  }
  return (
    <>
      <textarea value={markdown} onChange={handleChange}  className={styles.textarea}  name="markdown" id="" cols="30" rows="10"></textarea>
    </>
  );
}
