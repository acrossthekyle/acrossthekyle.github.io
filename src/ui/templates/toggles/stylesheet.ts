import tw from '@/styles';

const styles = tw({
  container: `
    absolute bottom-6 left-0 z-1
    w-full
    flex items-center justify-center gap-4
    pointer-events-auto

    sm:bottom-3
    lg:animate-none
    lg:hidden
  `,
  button: `
    flex items-center gap-1.25
    py-1 px-2
    text-xs
    bg-(--background)/75
    rounded-md

    lg:motion-safe:opacity-50
    lg:motion-safe:duration-300
    lg:motion-safe:hover:opacity-100
  `,
  icon: `
    w-3 h-3
  `,
});

export default styles;
