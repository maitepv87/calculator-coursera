import styles from "./Button.module.css";

export const Button = ({ children, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};
