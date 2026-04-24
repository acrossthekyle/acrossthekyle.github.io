import tw from '@/styles';

const styles = tw({
  external: `
    inline-block
    -mt-0.5
    w-2.5 h-2.5
  `,
  more: `
    relative z-1
    pt-1 pb-2

    motion-safe:opacity-50
    motion-safe:duration-300
    motion-safe:hover:opacity-100
  `,
});

export default styles;
