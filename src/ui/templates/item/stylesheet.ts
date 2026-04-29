import tw from '@/styles';

const styles = tw({
  container: (canRender: boolean, canFloat?: boolean) => tw(`
    relative
    flex items-start gap-4

    ${canFloat ? `
      constrained:absolute
      constrained:top-4
      constrained:right-10
      constrained:w-38
    ` : 'relative'}

    motion-safe:duration-300

    ${canRender ? 'motion-safe:top-0 motion-safe:opacity-100' : 'motion-safe:top-20 motion-safe:opacity-0'}
  `),
  toggle: `
    relative
    flex items-start gap-4
    text-left
    line-clamp-3
  `,
});

export default styles;
