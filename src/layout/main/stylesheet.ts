import tw from '@/styles';

const styles = tw({
  container: `
    flex-1
    relative
    rounded-md
    bg-(--background)
    text-(--foreground)
    p-2

    md:p-4
    md:rounded-lg
  `,
  inner: `
    animate-fade-in
  `,
});

export default styles;
