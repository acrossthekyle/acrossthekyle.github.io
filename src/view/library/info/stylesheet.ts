import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col items-center gap-1
    pb-4

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  header: `
    flex flex-col items-center gap-1.5
    mt-2
    leading-[1]
    font-sans font-medium
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
});

export default styles;
