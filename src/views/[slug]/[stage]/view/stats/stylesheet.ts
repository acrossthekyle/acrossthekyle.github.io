import tw from '@/styles';

const styles = tw({
  list: `
    flex flex-row gap-6
    mt-6
  `,
  item: `
    flex flex-col gap-1
  `,
  heading: `
    uppercase
    font-extrablack
    text-tiny

    peta:text-base
  `,
  value: `
    font-medium
    text-xs
    uppercase

    peta:text-xl
  `,
});

export default styles;
