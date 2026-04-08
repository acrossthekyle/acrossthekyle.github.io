import tw from '@/styles';

const styles = tw({
  highlight: `
  `,
  heading: `
    flex flex-col align-center justify-center
    h-124
    leading-[0.9]
    text-xl text-center
    font-sans font-black
    uppercase
    animate-fade-in

    before:absolute
    before:inset-0
    before:z-0
    before:bg-[radial-gradient(color-mix(in_srgb,var(--foreground),transparent_90%)_1px,transparent_1px)]
    before:bg-size-[20px_20px]

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
});

export default styles;
