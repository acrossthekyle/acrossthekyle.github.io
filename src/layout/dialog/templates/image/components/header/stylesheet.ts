import tw from '@/styles';

const styles = {
  container: (canRender: boolean) => tw(`
    relative
    flex items-start gap-4
    mb-4
    pointer-events-auto
    cursor-auto

    motion-safe:duration-300

    ${canRender ? 'motion-safe:top-0 motion-safe:opacity-100' : 'motion-safe:top-20 motion-safe:opacity-0'}
  `),
};

export default styles;
