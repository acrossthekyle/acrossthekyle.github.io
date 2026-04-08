import tw from '@/styles';

const styles = tw({
  container: `
    relative z-1
    flex flex-col
    min-h-[calc(100vh-4.5rem)]
    mt-6 mx-2
    p-4
    bg-(--background)
    text-(--foreground)
    animate-fade-in
  `,
});

export default styles;
