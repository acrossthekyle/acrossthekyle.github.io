import tw from '@/styles';

const styles = tw({
  container: `
    h-auto w-full
    flex flex-col
    divide-y divide-current/10

    sm:grid
    sm:grid-cols-2
    sm:divide-x
    lg:h-screen
    lg:divide-y-0
    lg:grid-cols-3
  `,







  header: `
    order-0
    h-[84vh]
    flex flex-col items-start justify-end
    p-4
    text-[min(10vw,42px)]
    font-black
    leading-[0.85]
    uppercase

    sm:h-svh
    sm:text-[min(5vw,40px)]
    lg:h-screen
    lg:text-[min(3.5vw,42px)]

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  title: `
    flex flex-col gap-0
  `,






  content: `
    order-2
    flex flex-col justify-between
    overflow-y-scroll

    sm:col-span-2
    lg:order-1
    lg:col-span-1

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
  section: `
    flex flex-col justify-start
    p-4
    border-t-1 border-current/10

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
    order-1
    h-[calc(75vh-2.5rem)]
    border-b-1 border-current/10

    sm:h-svh
    lg:order-2
    lg:h-screen
    lg:border-b-0

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  image: `
    opacity-90
  `,
});

export default styles;
