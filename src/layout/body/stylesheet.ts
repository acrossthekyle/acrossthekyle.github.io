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

    md:text-sm
    md:p-14
  `,
});

export default styles;
