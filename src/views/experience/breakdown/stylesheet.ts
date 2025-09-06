import tw from '@/styles';

const styles = tw({
  container: `
    grid grid-cols-2 gap-x-6 gap-y-6
    my-10

    base:gap-x-12
    base:gap-y-8
    giga:grid-cols-3
  `,
  heading: `
    text-base
    font-black
    uppercase
  `,
  index: `
    block
    text-xs/3
    font-normal
    lowercase
  `,
  content: `
    text-base/5
    capitalize
  `,
});

export default styles;
