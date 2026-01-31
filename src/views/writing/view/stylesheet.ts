import tw from '@/styles';

const styles = tw({
  list: `
    flex flex-col gap-8
    mt-6

    md:gap-6
  `,
  index: `
    absolute right-0 top-1
    px-1
    text-tiny text-(--background)
    font-bold font-mono
    bg-(--foreground)/45
    rounded-sm
  `,
});

export default styles;
