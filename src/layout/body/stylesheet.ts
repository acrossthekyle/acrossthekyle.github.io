import tw from '@/styles';

const styles = tw({
  container: `
    antialiased
    flex flex-col
    h-auto min-h-dvh
    text-(--background)
    bg-(--foreground)
    p-1

    md:p-2
  `,
});

export default styles;
