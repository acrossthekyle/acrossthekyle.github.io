import tw from '@/styles';

const styles = tw({
  definition: `
    flex justify-between
    mb-4
    w-full
    font-mono
    text-xtiny
    uppercase
  `,
  aside: `
    relative
    mt-10
    leading-[1]
    font-mono
    text-xtiny text-left
    uppercase

    sm:absolute
    sm:top-9
    sm:right-4
    sm:mt-0
    sm:text-right
  `,
  items: `
    relative z-1
    columns-sm gap-4
    mt-10
  `,
  item: `
    flex gap-4
    mb-4
    font-sans font-light
    text-sm
    uppercase
    break-inside-avoid-column
  `,
  index: `
    block
    mt-0.5
    font-mono font-normal
    text-xtiny
  `,
  lid: `
    block
    mt-0.5
    font-mono font-normal
    text-xtiny
  `,
});

export default styles;
