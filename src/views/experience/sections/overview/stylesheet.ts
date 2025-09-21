import tw from '@/styles';

const styles = tw({
  sections: `
    grid grid-cols-2 gap-x-2 gap-y-0
    mb-4

    base:gap-x-12
    giga:grid-cols-3
  `,
  section: `
    mb-6
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
    mb-2
    text-base
    font-medium
  `,
});

export default styles;
