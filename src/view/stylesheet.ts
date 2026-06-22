import tw from '@/styles';

export const styles = tw({
  header: `
    relative
    grid grid-cols-2 grid-flow-row auto-rows-min gap-y-6
    w-full max-w-sm
    mx-auto
    mt-24
    leading-[1]
    font-black
    text-[min(6.5vw,46px)]
    uppercase
  `,
  set: `
    relative
    flex flex-col
    whitespace-nowrap
  `,
  end: `
    items-end
    -mr-6
  `,
  start: `
    items-start
    -ml-6
  `,
  thin: `
    font-thin
  `,
  serif: `
    font-serif
    italic
  `,
  figure: `
    flex items-center justify-center
    my-24
    px-12
    w-full max-w-md h-100
    mx-auto

    sm:px-4
    sm:h-140
  `,
  image: `
    opacity-90
    rounded-4xl
  `,
  paragraph: `
    w-full max-w-md
    mb-4 mx-auto
    px-12
    text-sm text-justify
    leading-[1.75]

    sm:px-0
  `,
  emphasis: `
    font-serif font-bold
    italic
  `,
  heading: `
    relative
    mt-20
    flex flex-col items-center gap-4.75
    w-full max-w-md
    mx-auto

    before:absolute
    before:top-8
    before:left-1/2
    before:-translate-x-1/2
    before:h-px
    before:w-6
    before:bg-(--foreground)/50
  `,
  title: `
    font-serif
    italic
    uppercase
  `,
  lid: `
    font-mono
    uppercase
    text-tiny
  `,
});
