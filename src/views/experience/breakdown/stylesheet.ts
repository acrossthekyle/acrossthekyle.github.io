import tw from '@/styles';

const styles = tw({
  container: `
    grid grid-cols-2 gap-x-12 gap-y-8
    my-10

    giga:grid-cols-3
  `,
  section: ``,
  heading: `
    mb-3
    text-base/2
    font-black
    uppercase
  `,
  index: `
    block
    mb-1.5
    text-xs
    font-normal
    lowercase
  `,
  content: `
    text-base/5
    capitalize
  `,
});

export default styles;
