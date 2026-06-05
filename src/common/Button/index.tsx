import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export interface IButtonProps {
  hoveredButton?: string | null;
  link: string;
  color: string;
  text: string;
  icon?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  text,
  link,
  color,
  icon,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Link to={link} style={{ textDecoration: "none", color: "white" }}>
      <button
        className={styles.button}
        style={{
          backgroundColor: color,
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        type="button"
      >
        {icon ? <span className={styles.icon}>{icon}</span> : null}
        {text}
      </button>
    </Link>
  );
};

export default Button;
