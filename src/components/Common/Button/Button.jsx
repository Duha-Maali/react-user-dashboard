import styles from './Button.module.css';

function Button({ label, onClick, variant = 'primary', type = 'button' }) {
  return (
    <button
      className={`${styles.btn} ${styles[`btn--${variant}`]}`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
}

export default Button;
