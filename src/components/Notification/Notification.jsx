import styles from "./Notification.module.css";

export default function Notification({ text, type = "success" }) {
  return <p className={`${styles.window} ${styles[type]}`}>{text}</p>;
}
