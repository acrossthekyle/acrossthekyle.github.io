import tw from '@/styles';

export default function Header() {
  return (
    <h2 className={styles.container}>
      Menu
    </h2>
  );
};

const styles = tw({
  container: `
    sr-only
  `,
})
