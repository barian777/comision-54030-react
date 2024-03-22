import { Link } from 'react-router-dom';
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.footer}>
        <Link to="/">
          <img className={styles.brand}  src="https://res.cloudinary.com/dcu5e0sym/image/upload/v1706998716/Recurso_2_v931kc.png" alt="" />
        </Link>
    </div>
  );
};
