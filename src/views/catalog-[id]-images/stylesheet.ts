import tw from '@/styles';

const styles = tw({
  container: `
    relative z-2
    h-svh w-full
    flex flex-col items-center justify-center
  `,
  header: `
    absolute top-4 left-4
    font-normal
    text-tiny
    uppercase
    tracking-widest

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
});

export default styles;
