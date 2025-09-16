import { TimerIcon } from 'lucide-react';
import styles from './Logo.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <button>
        <TimerIcon size={46} />
        <h1>Chronos</h1>
      </button>
    </div>
  );
}
