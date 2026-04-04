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
    font-mono
    text-xtiny text-(--foreground) text-left
    uppercase

    md:text-right
  `,
  empty: `
    md:col-start-2
    xl:col-start-auto
  `,
  index: `
    block
    font-normal
    text-(--foreground)/50
  `,
});

export default styles;
