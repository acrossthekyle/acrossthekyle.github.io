import tw from '@/styles';

const styles = tw({
  container: `
    absolute top-4 left-6 z-100
    flex items-center gap-4
    leading-[0.85]
    font-bold
    uppercase
    text-tiny

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
  arrow: `
    w-4
  `,
});

export default styles;
