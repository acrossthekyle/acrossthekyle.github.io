import tw from '@/styles';

const styles = tw({
  stats: `
    grid grid-cols-1 gap-6

    md:grid-cols-2
  `,
  list: `
    flex flex-col gap-0
    mt-6

    md:flex-row
    md:gap-10
    md:mt-4
  `,
  item: `
    mb-2
    text-xs

    last:mb-0
  `,
});

export default styles;
