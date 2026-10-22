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
    absolute bottom-0 left-6 right-6 z-5
    text-xs text-center
    font-medium

    sm:bottom-6
    sm:text-tiny
    lg:text-xs
  `,
});
