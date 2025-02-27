import { useTheme } from '@/contexts/ThemeContext';
import styles from './styles.module.css';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={
        theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'
      }
    >
      {theme === 'light' ? (
        <i className="fa-solid fa-moon"></i>
      ) : (
        <i className="fa-solid fa-sun"></i>
      )}
    </button>
  );
}
