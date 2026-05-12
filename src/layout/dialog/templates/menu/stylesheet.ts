import tw from '@/styles';

const styles = tw({
  container: `
    absolute bottom-4 left-1/2 z-1
    -translate-x-1/2

    flex flex-col gap-4
    w-full max-w-sm
    h-auto

    p-4

    cursor-auto
    pointer-events-auto

    text-sm text-current/70
    font-normal

    bg-(--background)
    rounded-xl
    shadow-2xl

    overflow-y-scroll

    constrained:h-full
  `,
  close: `
    absolute top-4 right-4 z-1
    px-1.5 py-0.5
    text-tiny
    font-normal font-mono
    rounded-sm

    motion-safe:opacity-50
    motion-safe:duration-300
    motion-safe:hover:opacity-100
    motion-safe:focus:opacity-100
  `,
});

export default styles;
