import tw from '@/styles';

const styles = tw({
  container: `
    h-auto w-full
    flex flex-col
    divide-y divide-current/10
    border-current/10

    sm:grid
    sm:grid-cols-2
    sm:divide-x
    lg:h-screen
    lg:grid-cols-3
    lg:border-x-1
    lg:border-b-0

    motion-safe:opacity-0
    motion-safe:animate-fade-in
  `,
  header: `
    order-0
    h-[calc(75vh-2.5rem)]
    flex flex-col items-start justify-end
    p-4
    text-[min(10vw,32px)]
    font-black
    leading-[0.85]
    uppercase

    xs:text-[2.25rem]
    sm:h-[calc(100vh-2.5rem)]
    sm:text-[min(3.5vw,32px)]
    lg:text-[min(3vw,42px)]
    lg:h-screen

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  content: `
    order-2
    flex flex-col justify-between
    divide-y divide-current/10

    sm:border-current/10
    sm:col-span-2
    lg:order-1
    lg:col-span-1
    lg:border-t-0

    motion-safe:opacity-0
    motion-safe:animate-fade-in-down-slightly-delayed
  `,
  section: `
    p-4 pb-6

    lg:pb-16

    last:pb-4
  `,
  heading: `
    flex flex-row-reverse justify-between
    mb-4
    text-xs
    font-black
    uppercase
  `,
  index: `
    text-tiny
    font-light

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

    sm:h-[calc(100vh-2.5rem)]
    lg:order-2
    lg:h-screen

    motion-safe:opacity-0
    motion-safe:animate-fade-in-up-slightly-delayed
  `,
  image: `
    opacity-85
  `,
});

export default styles;
