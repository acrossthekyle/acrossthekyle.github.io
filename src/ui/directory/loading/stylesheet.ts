import tw from '@/styles';

const styles = tw({
  pulse: `
    flex flex-col gap-1
    animate-pulse
  `,
  eyebrow: `
    w-40 h-6
    bg-neutral-900
  `,
  text: `
    h-20
    bg-neutral-900
  `,
  short: `
    w-6/10
  `,
  long: `
    w-7/10
  `,
});

export default styles;
