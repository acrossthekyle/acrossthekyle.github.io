import tw from '@/styles';

export default function Copyright() {
  return (
    <p className={styles.container}>
      Made by a web developer. From Chicago with love.
    </p>
  );
};

const styles = tw({
  container: `
    text-xs text-center
    font-light

    sm:font-medium
    sm:pb-6
    sm:text-tiny
    lg:text-xs
  `,
});
