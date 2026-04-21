import tw from '@/styles';

const styles = tw({
  container: `
    antialiased
    scroll-smooth
    bg-(--background)
    text-(--foreground)

    selection:bg-yellow-300
    selection:text-black

    motion-safe:duration-300
  `,
});

export default styles;
