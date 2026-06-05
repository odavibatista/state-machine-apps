import React from "react";
import styles from "./styles.module.css";

interface ElevatorButtonProps {
  value: string;
  onClick: () => void;
}

const ElevatorButton: React.FC<ElevatorButtonProps> = ({
  value,
  onClick,
}) => {
  const isDoorButton =
    value === "<|>" || value === ">|<";

  return (
    <button
      className={`${styles.controlButton} ${
        isDoorButton ? styles.doorButton : ""
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default ElevatorButton;