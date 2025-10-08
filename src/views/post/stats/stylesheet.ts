import tw from '@/styles';

const styles = tw({
  sections: `
    grid grid-cols-2 gap-x-4 gap-y-2
    grid grid-cols-2 gap-x-6 gap-y-2

    base:gap-x-12
    giga:grid-cols-3
  `,
  section: `
    mb-6
  `,
  heading: `
    mb-1
    text-base
    text-sm
    font-black
    uppercase
  `,
  index: `
    text-xs/3
    block
    text-xs
    font-normal
    lowercase
  `,
  content: `
    mb-4
    text-base/5
    text-base
  `,
});

export default styles;
