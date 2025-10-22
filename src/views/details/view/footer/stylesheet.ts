import tw from '@/styles';

const styles = tw({
  footer: `
    flex flex-row justify-between gap-0
    border-t-1 border-t-white/12.5
    pt-8
  `,
  link: `
    text-right

    first:text-left
  `,
  title: `
    text-2xl/5
    font-black font-stretch-semi-condensed
    uppercase
  `,
  lid: `
    block
    mb-1
    text-xs
    tracking-wider
    font-semibold font-stretch-normal
  `,
  time: `
    block
    mt-1
    text-xs
    font-medium font-stretch-normal
  `,
});

export default styles;
