import tw from '@/styles';

export const styles = tw({
  container: `
    fixed bottom-0 -right-27
    p-4
    flex items-center gap-2
    text-(--foreground)
    font-thin font-mono
    text-xtiny
    uppercase
    tracking-widest
    origin-bottom-left -rotate-90

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  inner: (isActive: boolean) => tw(`
    ${isActive ? 'line-through' : ''}
  `),
});


