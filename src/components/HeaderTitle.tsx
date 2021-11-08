import styles from "../styles/HeaderTitle.module.css";

export default function HeaderTitle(props: any) {
  return (
    <div className={styles.h2}>
      <h2>{props.title}</h2>
    </div>
  );
}
