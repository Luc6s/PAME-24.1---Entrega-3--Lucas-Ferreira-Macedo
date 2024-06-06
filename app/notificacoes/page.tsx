'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '../styles/Notificacoes.module.css';

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/menu" className={`${styles.a} ${pathname === '/menu' ? styles.currentPage : ''}`}>
            Pagina principal
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/notificacoes" className={`${styles.a} ${pathname === '/notificacoes' ? styles.currentPage : ''}`}>
            Notificações
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/perfil" className={`${styles.a} ${pathname === '/perfil' ? styles.currentPage : ''}`}>
            Perfil
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <Menu />
      <div className={styles.feedContainer}>
        <div className={styles.sidebar}></div>
        <div className={styles.feed}>
          <div>
            <div className={styles.post}>
              <h3>Notificaçao de Eduardo</h3>
              <p>Curtiu seu post</p>
            </div>
            <div className={styles.post}>
              <h3>Notificaçao de Pedro</h3>
              <p>Comentou no seu post...</p>
            </div>
          </div>
        </div>
        <div className={styles.sidebarRight}></div>
      </div>
    </div>
  );
};

export default DashboardPage;
