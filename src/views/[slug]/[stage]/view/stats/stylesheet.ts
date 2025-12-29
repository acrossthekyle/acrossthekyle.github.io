import tw from '@/styles';

const styles = tw({
  container: `
    px-8 pb-8

    hecto:px-12
    mega:px-16
  `,
  list: `
    flex flex-col gap-4

    baseplus:flex-row
    baseplus:gap-12
  `,
  item: `
    flex flex-col gap-0
  `,
  heading: `
    capitalize
  `,
  value: `
    font-black
  `,
});

export default styles;
