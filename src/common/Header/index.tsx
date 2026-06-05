import Button from "../Button";
import styles from "./styles.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <header className={styles.header}>
  <div className={styles.brand}>
    ⚙️ State Machine Apps
  </div>

  <nav className={styles.navigation}>
      <Button
        color="#111827"
        link="/"
        text="🏠 Home"
      />

      <Button
        link="/vending-machine"
        text="🍬 Vending Machine"
        color="#22c55e"
      />

      <Button
        link="/elevator"
        text="⬆️ Elevador"
        color="#3b82f6"
      />
  </nav>
</header>

    </header>
  );
};

export default Header;