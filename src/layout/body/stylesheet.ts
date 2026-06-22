import tw from '@/styles';

export const styles = tw({
  container: `
    antialiased
    scroll-smooth scrollbar-thin
    bg-(--background)
    text-(--foreground)

    selection:bg-yellow-300
    selection:text-black
  `,
});


