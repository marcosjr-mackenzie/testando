"use client";
import Link from "next/link";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  if (pathname == "/") return null;
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href={"/analisador-receitas"} className={styles.link}>
          Analisador de Receitas
        </Link>
        <Link href={"/gerador-receitas"} className={styles.link}>
          Gerador de Receitas
        </Link>
      </nav>
    </header>
  );
}

export default Header;
