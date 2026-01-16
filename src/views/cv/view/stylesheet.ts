import tw from '@/styles';

const styles = tw({
  spread: `
    flex items-end justify-between
  `,
  list: `
    flex flex-col gap-2
  `,
  responsibilities: `
    ml-4
    list-disc
  `,
  skill: `
    flex gap-4

    flex-row
    items-center
    justify-between
  `,
});

export default styles;
