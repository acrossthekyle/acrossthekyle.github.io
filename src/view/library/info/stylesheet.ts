import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col items-center gap-1

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  header: `
    flex flex-col items-center gap-1.5
    mt-2
    leading-[1]
    text-xs text-center
    uppercase
  `,
  subheader: `
    text-current/40
    tracking-wide
  `,
  divider: `
    inline-block
    w-3
    text-center
  `,
  more: `
    flex items-center gap-1
    p-1
    text-xs text-left
    capitalize

    lg:text-tiny

    motion-safe:duration-300
    motion-safe:opacity-50
    motion-safe:hover:opacity-100
  `,
  icon: `
    w-3.5 h-3.5

    lg:w-3
    lg:h-3
  `,
});

export default styles;
