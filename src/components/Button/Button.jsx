import { default as Link } from "next/link";
import styles from "./Button.module.css";
function Button({ children, href, onClick }) {
  if (href) {
    return (
      <Link className={styles.btn} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <div className={styles.btn} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
