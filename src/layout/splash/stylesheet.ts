import tw from '@/styles';

const styles = tw({
  container: (isVisible: boolean) => tw(`
    fixed inset-0 z-9999
    flex items-center justify-center
    bg-(--background)
    transition-opacity duration-1000

    ${isVisible ? 'opacity-100' : 'opacity-0'}
  `),
  content: `
    flex flex-col justify-center gap-1
    text-xs text-center
    font-sans font-medium
  `,
  header: `
    text-base

    motion-safe:animate-fade-in-up-delayed
  `,
  paragraph: `
    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
});

export default styles;
