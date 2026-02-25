import tw from '@/styles';

const styles = tw({
  container: `
    antialiased
    flex flex-col
    h-auto min-h-full
    p-6 py-14
    font-mono
    text-base text-(--foreground)
    bg-(--background)

    sm:p-14
    sm:text-sm
  `,
});

export default styles;
