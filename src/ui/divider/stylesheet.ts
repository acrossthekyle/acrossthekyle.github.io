import tw from '@/styles';

const styles = tw({
  divider: `
    flex flex-col gap-[1px]
    h-4
    -mx-2
    bg-(--foreground)

    md:-mx-4
    md:h-8
  `,
  upper: `
    h-2
    rounded-b-md
    bg-(--background)

    md:rounded-b-lg
    md:h-4
  `,
  lower: `
    h-2
    rounded-t-md
    bg-(--background)

    md:rounded-t-lg
    md:h-4
  `,
});

export default styles;
