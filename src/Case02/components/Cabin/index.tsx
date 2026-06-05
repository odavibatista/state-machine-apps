import React from "react";
import styles from "./styles.module.css";

interface ElevatorCabinProps {
  top: number;
  doorWidth: number;
}

const ElevatorCabin: React.FC<ElevatorCabinProps> = ({
  top,
  doorWidth,
}) => {
  return (
    <div
      className={styles.cabin}
      style={{ top: `${top}px` }}
    >
      <div className={styles.cabinHeader}>
        <span>ELEVADOR</span>
      </div>

      <div className={styles.cabinBody}>
        <div
          className={styles.cabinDoor}
          style={{ width: `${doorWidth}%` }}
        />
      </div>
    </div>
  );
};

export default ElevatorCabin;