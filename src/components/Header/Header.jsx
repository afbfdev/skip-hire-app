import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Choose Your Skip Size</h1>
      <p className={styles.subtitle}>Select the skip size that best suits your needs</p>
    </header>
  );
};

export default Header;