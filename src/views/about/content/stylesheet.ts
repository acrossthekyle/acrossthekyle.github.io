import tw from '@/styles';

export const styles = tw({
  section: `
    flex flex-col justify-start
    border-t-1 border-current/10
    p-4 pb-16

    last:justify-end
    last:pb-4

    lg:first:border-t-0
  `,
  heading: `
    flex flex-row justify-between
    mb-2
    text-xs
    font-black
    uppercase
  `,
  index: `
    text-tiny
    font-light
    tracking-widest

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
    text-current/50

    motion-safe:duration-300
    motion-safe:hover:text-current/100
    motion-safe:focus:text-current/100
  `,
});


