import tw from '@/styles';

export default function Header() {
  return (
    <h2 className={styles.container}>
      Site Index
    </h2>
  );
};

const styles = tw({
  container: `
    px-6 pt-5
    text-base
    uppercase
    font-black
  `,
})
