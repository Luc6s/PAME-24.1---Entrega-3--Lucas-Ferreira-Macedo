'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles/Login.module.css';

export default function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.authenticated) {
        // Armazenar o email no localStorage
        localStorage.setItem('userEmail', email);
        router.push('/menu'); // Redirecionar após login bem-sucedido
      } else {
        alert('Falha na autenticação: ' + data.error);
      }
    } catch (error) {
      alert('Erro ao autenticar usuário');
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.button}>Entrar</button>
          <button type="button" onClick={() => router.push('/cadastro')} className={styles.button}>Cadastre-se</button>
        </div>
      </form>
    </div>
  );
}
