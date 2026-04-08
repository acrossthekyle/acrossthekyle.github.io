import tw from '@/styles';

const styles = tw({
  divider: `
    flex flex-col gap-[1px]
    h-8
    -mx-4
    bg-(--foreground)
  `,
  upper: `
    h-4
    rounded-b-lg
    bg-(--background)
  `,
  lower: `
    h-4
    rounded-t-lg
    bg-(--background)
  `,
});

export default styles;
