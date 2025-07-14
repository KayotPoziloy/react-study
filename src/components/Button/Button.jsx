import styles from "./Colors.module.css";

export default function Button() {
  return (
    <button className={`${styles.green} ${styles.size} ${styles.border}`}>
      Нажми меня
    </button>
  );
}
