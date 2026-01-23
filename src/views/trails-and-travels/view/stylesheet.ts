import tw from '@/styles';

const styles = tw({
  list: `
    flex flex-col gap-6
    mt-6
  `,
  item: `
    border-b-1 border-b-current/15 border-dashed
    pb-6

    last-of-type:border-b-0
  `,
  subtitle: `
    flex justify-between gap-8
    w-full
    text-current/75
    uppercase
    font-mono !text-xs
  `,
});

export default styles;
