import tw from '@/styles';

const styles = tw({
  list: `
    flex flex-col gap-6
    mt-10
  `,
  link: `
    block
    relative
  `,
  date: `
    block
    !text-sm text-current/50

    md:!text-xs
  `,
});

export default styles;
