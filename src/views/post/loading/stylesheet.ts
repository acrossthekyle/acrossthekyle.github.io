import tw from '@/styles';

const styles = tw({
  container: `
    h-full w-130
    !p-0
    !py-12
    !px-2
    border-l-1 border-l-white/20
  `,
  skeleton: `
    animate-pulse
  `,
  header: `
    flex flex-col gap-2
    w-full
    mb-6
    px-12

    base:hidden
  `,
  paragraph: `
    mb-4
    px-12

    last:mb-0
  `,
  short: `
    w-6/10
  `,
  long: `
    w-7/10
  `,
  tiny: `
    w-20
  `,
  small: `
    w-40
  `,
  medium: `
    w-60
  `,
  hero: `
    block
    h-20
    bg-neutral-900
  `,
  word: `
    inline-block
    h-4
    mr-1
    bg-neutral-900
  `,
});

export default styles;
