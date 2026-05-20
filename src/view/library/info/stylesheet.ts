import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col items-center gap-1

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
  header: `
    flex flex-col items-center gap-1.5
    mt-2
    leading-[1]
    text-xs text-center
    uppercase
  `,
  title: `
    block
    mb-1
    rounded-sm
    text-8xl
    font-sans font-black
    px-2 py-1
  `,
  subheader: `
    text-current/60
    tracking-wide
  `,
  divider: `
    inline-block
    w-3
    text-center
  `,
  options: `
    flex items-center justify-center gap-4
    w-full
    mt-4
  `,
  option: (isActive: boolean) => tw(`
    group
    rounded-full
    p-2
    duration-300 ease-in-out

    ${isActive ? 'bg-yellow-300 text-black' : 'bg-(--background)'}

    motion-safe:duration-300
    motion-safe:hover:border-current/70
  `),
  icon: `
    w-3.5 h-3.5

    lg:w-3
    lg:h-3
  `,
});

export default styles;
