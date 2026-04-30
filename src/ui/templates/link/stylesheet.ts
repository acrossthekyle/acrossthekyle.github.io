import tw from '@/styles';

const styles = tw({
  container: `
    relative
    flex items-center gap-4
    w-full
    rounded-md
    outline-0
    pointer-events-auto
    text-left

    motion-safe:duration-300
    motion-safe:hover:bg-(--foreground)/2.5

    lg:p-2
    lg:-m-2
  `,
});

export default styles;
