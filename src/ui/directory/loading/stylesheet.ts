import tw from '@/styles';

const styles = tw({
  container: `
    mb-1
  `,
  pulse: `
    flex flex-col gap-1
    animate-pulse
  `,
  text: `
    h-24
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
