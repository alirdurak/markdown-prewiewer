import styles from "../styles/text-area.module.scss"
export default function TextArea () {
  return (
    <>
      <textarea className={styles.textarea}  name="markdown" id="" cols="30" rows="10"></textarea>
    </>
  );
}
