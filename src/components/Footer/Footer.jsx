import { FaTelegramPlane, FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Ostrynska Kateryna 2024</p>
        <div className={styles.right}>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://t.me/kateryna_ostrynska"
            aria-label="Telegram"
            className={styles.button}
          >
            <FaTelegramPlane size={18} />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/kateryna-ostrynska-9155b0151/"
            aria-label="LinkedIn"
            className={styles.button}
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
