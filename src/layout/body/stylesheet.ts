import tw from '@/styles';

const styles = tw({
  container: `
    antialiased
    flex flex-col
    h-auto min-h-full
    p-6
    font-mono
    text-base text-(--foreground)
    bg-(--background)

    md:p-14
    md:text-sm
  `,
});

export default styles;
