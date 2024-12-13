import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <h1>Util Func</h1>
      </div>
    </div>
  );
}
