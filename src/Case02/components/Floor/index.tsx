import React from "react";
import styles from "./styles.module.css";

interface ElevatorFloorProps {
  label: string;
}

const ElevatorFloor: React.FC<ElevatorFloorProps> = ({ label }) => {
  const floorName =
    label === "T"
      ? "Térreo"
      : `${label}º Andar`;

  return (
    <div className={styles.floor}>
      <div className={styles.floorLine} />

      <div className={styles.floorInfo}>
        <span className={styles.floorLabel}>
          {floorName}
        </span>
      </div>
    </div>
  );
};

export default ElevatorFloor;