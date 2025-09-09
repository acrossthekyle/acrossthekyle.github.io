import tw from '@/styles';

const styles = tw({
  sections: `
    grid grid-cols-2 gap-x-6 gap-y-2
    mb-4

    base:gap-x-12
    giga:grid-cols-3
  `,
  section: `
    mb-6
  `,
  heading: `
    mb-1
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
    mb-4
    text-base
  `,
});

export default styles;
