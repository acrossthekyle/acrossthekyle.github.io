import tw from '@/styles';

const styles = tw({
  container: (canRender: boolean) => tw(`
    relative
    flex items-start gap-4

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
