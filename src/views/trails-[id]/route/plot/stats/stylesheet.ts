import tw from '@/styles';

const styles = tw({
  items: `
    grid grid-cols-1 gap-x-8 gap-y-2
    p-1.5

    xs:absolute
    xs:bottom-0
    xs:grid-cols-3
    xs:grid-rows-2
    md:right-2
    md:bottom-1
    xl:flex
    xl:flex-row
    xl:gap-8
  `,
  item: `
    leading-[1.25]
    font-sans font-light
    text-tiny text-left
    uppercase

    md:text-right
  `,
  empty: `
    md:col-start-2
    xl:col-start-auto
  `,
  index: `
    block
    font-mono font-normal
    text-xtiny
  `,
});

export default styles;
