import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1>404 - Сторінку не знайдено</h1>
      <p>На жаль, такої сторінки не існує.</p>
      <Link to="/" className={styles.link}>Повернутися на головну</Link>
    </div>
  );
};

export default NotFoundPage;
