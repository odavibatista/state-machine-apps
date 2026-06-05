import React from "react";
import styles from "./styles.module.css";

interface PopupProps {
  isOpen: boolean;
  title?: string;
  message: string;
  type?: "success" | "error" | "warning" | "info";
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  title,
  message,
  type = "info",
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={`${styles.popup} ${styles[type]}`}>
        <div className={styles.header}>
          <h3>{title}</h3>

          <button
            className={styles.closeButton}
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className={styles.body}>
          <p>{message}</p>
        </div>

        <div className={styles.footer}>
          <button
            className={styles.confirmButton}
            onClick={onClose}
          >
            Entendi
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;