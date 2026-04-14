import tw from '@/styles';

const styles = tw({
  container: `
    relative z-1
    flex flex-col
    min-h-[calc(100vh-4.75rem)]
    mt-6 mx-2
    px-2 py-2
    bg-(--background)
    text-(--foreground)

    motion-safe:animate-fade-in

    grid-background
    grid-overlay
  `,
});

export default styles;
