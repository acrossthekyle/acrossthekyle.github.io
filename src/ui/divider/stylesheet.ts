import tw from '@/styles';

const styles = tw({
  divider: `
    flex flex-col gap-[1px]
    mt-10
    h-8
    -mx-2
    bg-(--foreground)

    md:-mx-4
  `,
  upper: `
    h-4
    rounded-b-md
    bg-(--background)

    md:rounded-b-lg
  `,
  lower: `
    h-4
    rounded-t-md
    bg-(--background)

    md:rounded-t-lg
  `,
});

export default styles;
