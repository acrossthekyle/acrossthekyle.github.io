import tw from '@/styles';

const styles = tw({
  heading: `
    flex flex-col align-center justify-center
    h-124
    leading-[0.9]
    text-xl text-center
    font-sans font-black
    uppercase
    animate-fade-in

    xs:text-3xl
    sm:text-5xl
    md:text-6xl
    md:absolute
    md:inset-0
    md:z-1
    md:h-auto
  `,
  subheading: `
    block
    mt-3
    font-mono
    text-xtiny
  `,
  content: `
    flex-1
    flex flex-col justify-between
    w-102
    leading-[1.25]
    font-sans font-light
    text-xs
    uppercase
  `,
  small: `
    text-tiny
  `,
  aside: `
    absolute bottom-4 right-4
    leading-[1]
    font-mono font-normal
    text-xtiny
    uppercase
  `,
  times: `
    flex gap-4
    text-right
  `,
  index: `
    block
    mb-0.5
  `,
});

export default styles;
