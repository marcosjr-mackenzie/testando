import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}> Analisador de Receitas </h1>
        <section className={styles.menu_options}>
          <div className={styles.side}>
            <Button href={"/analisador-receitas"}>
              Quero analisar minha receita
            </Button>
          </div>
          <div className={styles.side}>
            <Button href={"/gerador-receitas"}>Quero gerar uma receita</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
