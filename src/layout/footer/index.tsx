import styles from './stylesheet';

export default function Footer() {
  return (
    <footer className={styles.container}>
      © 2011 - {new Date().getFullYear()}. All rights reserved.
    </footer>
  );
}
