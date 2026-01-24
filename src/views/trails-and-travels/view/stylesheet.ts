import tw from '@/styles';

const styles = tw({
  list: `
    flex flex-col gap-6
    mt-6
  `,
  item: `
    border-b-1 border-b-current/15 border-dashed
    pb-7

    last-of-type:border-b-0
    last-of-type:pb-0
  `,
});

export default styles;
