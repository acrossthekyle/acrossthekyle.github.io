import tw from '@/styles';

const styles = tw({
  item: `
    relative
  `,
  wiki: `
    absolute top-0 right-0
    text-sm

    md:text-xs
  `,
  title: `
    block
    pr-12
    whitespace-nowrap truncate
  `,
});

export default styles;
