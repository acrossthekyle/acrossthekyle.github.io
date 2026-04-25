import tw from '@/styles';

const styles = tw({
  container: `
    relative
    flex items-start gap-4
    w-full
    rounded-md
    outline-0
    pointer-events-auto
    text-left

    motion-safe:duration-300
    motion-safe:hover:bg-(--foreground)/2.5

    sm:p-2
    sm:-m-2
  `,
});

export default styles;
