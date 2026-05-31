import tw from '@/styles';

const styles = tw({
  container: `
    grid grid-cols-1
    h-auto w-full

    sm:grid-cols-2
    lg:grid-cols-3
    lg:h-full
    lg:flex
  `,







  header: `
    col-span-1 order-0
    flex flex-col items-start justify-end
    h-[60vh]
    p-4

    sm:h-svh

    landscape-constrained:min-h-[58vw]

    lg:h-screen
    lg:fixed
    lg:left-10
    lg:w-[calc(33.3333333333vw-0.75rem)]
    lg:border-l-1
    lg:border-current/10

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  title: `
    flex flex-col gap-0
    text-[min(10vw,42px)]
    font-black
    leading-[0.85]
    uppercase

    sm:text-[min(5vw,40px)]
    lg:text-[min(3.5vw,42px)]
  `,






  content: `
    col-span-1 order-2
    h-auto w-screen
    flex flex-col justify-between

    sm:col-span-2
    sm:gap-0
    sm:w-[50vw]
    sm:h-auto
    sm:border-t-1
    sm:border-current/10

    landscape-constrained:min-h-[90vw]
    landscape-constrained:pb-4

    lg:border-t-0
    lg:col-span-1
    lg:order-1
    lg:absolute
    lg:left-[calc(33.3333333333vw+1.75rem)]
    lg:w-[calc(33.3333333333vw-0.75rem)]
    lg:h-full

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
  section: `
    flex flex-col justify-start
    p-4 pb-10

    sm:last:pb-4

    first:border-t-0
    last:justify-end
  `,
  heading: `
    flex flex-row-reverse justify-between
    mb-2
    text-xs
    font-black
    uppercase
  `,
  index: `
    text-tiny
    font-light
    tracking-[0.125rem]

    md:text-xtiny
  `,
  paragraph: `
    w-full max-w-72
    mb-4
    text-sm

    md:text-xs

    last:mb-0
  `,
  link: `
    underline underline-offset-2 decoration-dotted
  `,





  figure: `
    col-span-1 order-1
    h-auto

    sm:h-screen
    sm:border-l-1
    sm:border-current/10
    sm:fixed
    sm:top-0
    sm:right-0
    sm:w-[50vw]
    lg:order-2
    lg:w-[calc(33.3333333333vw-0.75rem)]

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  image: `
    opacity-90
  `,
});

export default styles;
