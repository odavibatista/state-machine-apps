import { useState } from "react";
import styles from "./styles.module.css";
import Button from "../Button";

function Main() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <main className={styles.mainScreen}>
      <div className={styles.heroCard}>
        <div className={styles.header}>
          <div className={styles.logo}>
            ⚙️
          </div>

          <h1>
            State Machine Apps
          </h1>

          <p>
            Simulações interativas desenvolvidas para a disciplina de
            <strong> Teoria da Computação e Compiladores</strong>,
            representando autômatos finitos através de aplicações web.
          </p>
        </div>

        <nav className={styles.navigation}>
          <Button
            link="vending-machine"
            icon="🥤"
            text="Case 01 - Vending Machine"
            color="#22c55e"
            hoveredButton={hoveredButton}
            onMouseEnter={() => setHoveredButton("maquina")}
            onMouseLeave={() => setHoveredButton(null)}
          />

          <Button
            link="elevator"
            icon="⬆️"
            text="Case 02 - Elevador"
            color="#3b82f6"
            hoveredButton={hoveredButton}
            onMouseEnter={() => setHoveredButton("elevador")}
            onMouseLeave={() => setHoveredButton(null)}
          />

          <a
            href="https://github.com/odavibatista/state-machine-apps/blob/main/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.theoryButton}
          >
            📚 Referencial Teórico
          </a>
        </nav>

        <footer className={styles.footer}>
          <span>
            Teoria da Computação & Compiladores
          </span>

          <span>
            React + TypeScript
          </span>
        </footer>
      </div>
    </main>
  );
}

export default Main;