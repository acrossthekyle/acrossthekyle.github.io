import tw from '@/styles';

const styles = tw({
  list: `
    flex flex-col gap-6
  `,
  link: `
    block
    relative
  `,
  type: `
    capitalize
  `,
  date: `
    block
    text-current/50
  `,
  dash: `
    hidden

    md:inline
  `,
});

export default styles;
