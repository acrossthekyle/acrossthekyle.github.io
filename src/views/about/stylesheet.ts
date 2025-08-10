import tw from '@/styles';

const styles = tw({
  container: `
    group/container
    relative z-0
    flex flex-col justify-between
    py-6 pl-6
    overflow-y-scroll

    ml:absolute
    ml:top-0
    ml:bottom-0
    ml:left-0
    ml:pl-80
    sl:py-12
    sl:pl-120
  `,
  header: `
    w-full
    mb-8 pr-6
    animate-elastic-in

    ml:pr-10
  `,
  title: `
    text-4xl/9
    font-black
    uppercase

    5xs:text-5xl/11
    3xs:text-6xl/14
    2xs:text-7xl/16
    sm:text-8xl/21
    sl:text-9xl/28
  `,
  block: `
    block
  `,
  status: `
    w-full
    pr-6
    text-xl
    uppercase

    ml:mb-4
  `,
  body: `
    w-full
    pr-6
    text-lg
    font-normal
    animate-elastic-in

    ml:text-3xl
    ml:pr-36
  `,
  columns: `
    hidden
    grid grid-cols-2
    mt-12
  `,
  heading: `
    text-4xl
    font-bold
    uppercase
    animate-elastic-in
  `,
  list: `
    flex flex-col gap-6
    mt-12
    pr-36
    animate-elastic-in
  `,
  name: `
    text-2xl
    font-semibold
  `,
  date: `
    text-sm
    uppercase
  `,
  place: `
    block
    text-base
    font-light
  `,
});

export default styles;
