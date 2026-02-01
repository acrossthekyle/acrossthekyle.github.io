import tw from '@/styles';

const styles = tw({
  heading: `
    uppercase
  `,
  list: `
    grid grid-cols-2 gap-6

    md:grid-cols-3
  `,
  link: `
    block
  `,
  hr: `
    w-3
    my-7
    border-(--foreground)/50
  `,
});

export default styles;
