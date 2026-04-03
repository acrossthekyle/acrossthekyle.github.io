import tw from '@/styles';

const styles = tw({
  items: `
    relative
    p-2.75

    xs:grid
    xs:grid-cols-3
    xs:grid-rows-2
    xs:gap-x-8
    xs:gap-y-2
    sm:flex
    sm:flex-row
    sm:gap-8
    sm:absolute
    sm:bottom-2.75
    sm:right-3.5
    sm:p-0
    lg:bottom-2.5
    lg:grid
    lg:grid-cols-3
    lg:grid-rows-2
    lg:gap-x-8
    lg:gap-y-2
    xl:bottom-2.75
    xl:flex
    xl:flex-row
    xl:gap-8
  `,
  item: `
    font-mono
    text-xtiny text-(--foreground) text-left
    uppercase
    pb-2

    sm:pb-0
    sm:text-right

    last:pb-0
  `,
  empty: `
    lg:col-start-2
    xl:col-start-auto
  `,
  index: `
    block
    font-normal
    text-(--foreground)/50
  `,
});

export default styles;
