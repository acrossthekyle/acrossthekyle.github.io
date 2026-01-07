import tw from '@/styles';

const styles = tw({
  list: `
    flex gap-4
    mt-2

    base:mt-6
    base:gap-6
    hecto:gap-8
    kilo:gap-12
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
