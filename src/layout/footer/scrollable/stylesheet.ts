import tw from '@/styles';

export const styles = tw({
  scroll: `
    hidden
    fixed bottom-4 left-4
    w-px h-12
    bg-(--foreground)/50
  `,
  wheel: (hasScrolled: boolean) => tw(`
    absolute left-1/2
    -translate-x-1/2
    w-2 h-4
    bg-(--background)
    border border-current/50
    rounded-full

    ${!hasScrolled ? 'motion-safe:opacity-0 motion-safe:animate-scrollable' : ''}
  `),
});


