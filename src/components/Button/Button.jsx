import styles from "./Button.module.css";

export const Button = ({ children, onClick, variant = "primary" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.button} ${styles[variant]}`}
    >
      {children}
    </button>
  );
};
