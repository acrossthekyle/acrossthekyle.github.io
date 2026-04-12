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



  section: `
    relative
    mt-20
    font-mono
    uppercase

    first-of-type:mt-10
  `,
  arrow: `
    w-2.25 h-2.25
  `,
  start: `
    flex items-start
  `,
  heading: `
    sticky top-10
    self-start
    flex gap-113
    leading-[1]
    text-xs
  `,
  index: `
    text-xtiny text-current/80
    font-normal
  `,
  label: `
    block
    w-34
  `,
  subheading: `
    flex items-center gap-1
    text-xtiny
    font-normal
  `,
  items: `
    flex flex-col gap-6
    ml-57 -mt-3
  `,
  item: `
    flex gap-8
  `,
  link: `
    w-48
    text-xs
    rounded-xs

    md:-m-2
    md:p-2
    md:duration-300
    md:hover:bg-(--foreground)/2.5
  `,
  title: `
    flex items-center gap-1
  `,
  stats: `
    flex flex-col gap-0.5
    mt-1
    font-normal
    text-xtiny text-current/80
  `,


  sticky: `
    absolute right-4 top-20 bottom-4 z-2
    flex items-end
  `,
  map: `
    sticky bottom-14
    relative
    w-full

    md:w-1/2
    lg:w-56
    xl:w-100
  `,




  // section: `
  //   relative
  //   flex flex-col gap-4
  //   mb-20

  //   lg:flex-row
  //   lg:gap-12

  //   last:mb-0
  // `,
  // spacer: `
  //   mt-10
  // `,
  // heading: `
  //   sticky top-12 z-10
  //   self-start
  //   flex-none
  //   w-24
  //   mb-2
  //   leading-[1]
  //   font-mono font-bold
  //   text-xs
  //   uppercase
  //   whitespace-nowrap

  //   md:w-32
  //   lg:mb-0
  //   lg:w-48
  // `,
  // subheading: `
  //   block
  //   mt-1.5
  //   leading-[1]
  //   font-mono font-normal
  //   text-xtiny
  // `,
  // items: `
  //   flex flex-col gap-10
  // `,
  // item: `
  //   flex flex-col gap-2

  //   md:flex-row
  //   md:gap-12
  // `,
  // index: `
  //   block
  //   font-mono
  //   text-xtiny
  // `,
  // link: `
  //   block
  //   leading-[1]
  //   font-mono
  //   text-xs
  //   uppercase
  //   overflow-hidden
  // `,
  // lid: `
  //   block
  //   mt-2
  //   leading-[1.25]
  //   font-mono font-normal
  //   text-xtiny text-current/70
  // `,
});

export default styles;
