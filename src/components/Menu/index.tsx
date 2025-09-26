import { HistoryIcon, HomeIcon, SettingsIcon, SunMedium } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <>
      <nav className={styles.menu}>
        <a className={styles.menuLink} href='#'>
          <HomeIcon />
        </a>
        <a className={styles.menuLink} href='#'>
          <HistoryIcon />
        </a>
        <a className={styles.menuLink} href='#'>
          <SettingsIcon />
        </a>
        <a className={styles.menuLink} href='#'>
          <SunMedium />
        </a>
      </nav>
    </>
  );
}
