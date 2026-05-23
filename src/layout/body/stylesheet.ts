import tw from '@/styles';

const styles = tw({
  container: `
    antialiased
    scroll-smooth
    font-sans font-normal
    bg-(--background)
    text-(--foreground)

    selection:bg-yellow-300
    selection:text-black
  `,
});

export default styles;
