import tw from '@/styles';

const styles = tw({
  section: `
    base:opacity-0
    base:animate-in-fade-delayed
  `,
  heading: `
    mb-0
    text-sm
    font-black
    uppercase
  `,
  index: `
    block
    text-xs
    font-normal
    lowercase
  `,
  content: `
    mt-4
    text-base
    font-medium
  `,
});

export default styles;
