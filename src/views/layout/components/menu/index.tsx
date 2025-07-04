import Footer from './footer';
import Content from './content';
import styles from './stylesheet';

export default function Menu() {
  return (
    <div className={styles.container}>
      <Content />
      <Footer />
    </div>
  );
}
