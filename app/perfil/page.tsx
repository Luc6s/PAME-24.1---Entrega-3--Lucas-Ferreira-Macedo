'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '../styles/Perfil.module.css';

const Menu = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/menu" className={`${styles.a} ${pathname === '/menu' ? styles.currentPage : ''}`}>
            Página principal
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
          <div className={styles.profileSection}>
            <div className={styles.profilePicture}>Foto</div>
            <div className={styles.description}>
              <h2>Nome: João Silva</h2>
              <p>Data de Nascimento: 01/01/1990</p>
              <p>Descrição: Apaixonado por tecnologia e desenvolvimento web. Adora aprender coisas novas e compartilhar conhecimento.</p>
            </div>
          </div>
          <div className={styles.largePhoto}></div>
          <div className={styles.actions}>
            <button className={styles.actionButton}>Curtir</button>
            <button className={styles.actionButton}>Comentar</button>
          </div>
          <div className={styles.post}></div>
        </div>
        <div className={styles.sidebarRight}></div>
      </div>
    </div>
  );
};

export default DashboardPage;