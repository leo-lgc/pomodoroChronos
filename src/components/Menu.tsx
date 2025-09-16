import { HistoryIcon, HomeIcon, SettingsIcon, SunMedium } from 'lucide-react';
import styles from './Menu.module.css';

export function Menu() {
  return (
    <div className={styles.menu}>
      <button className={styles.button}>
        <HomeIcon size={28}></HomeIcon>
      </button>
      <button className={styles.button}>
        <HistoryIcon size={28}></HistoryIcon>
      </button>
      <button className={styles.button}>
        <SettingsIcon size={28}></SettingsIcon>
      </button>
      <button className={styles.button}>
        <SunMedium size={28}></SunMedium>
      </button>
    </div>
  );
}
