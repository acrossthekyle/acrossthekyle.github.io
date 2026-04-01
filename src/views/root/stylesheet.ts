import tw from '@/styles';

const styles = tw({
  heading: `
    absolute inset-0 z-1
    flex flex-col align-center justify-center
    leading-[0.9]
    text-xl text-(--foreground) text-center
    font-sans font-black
    uppercase

    before:absolute
    before:inset-0
    before:z-0
    before:bg-[radial-gradient(color-mix(in_srgb,var(--foreground),transparent_90%)_1px,transparent_1px)]
    before:bg-size-[20px_20px]
    before:mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]

    xs:text-3xl
    sm:text-5xl
    md:text-6xl
  `,
  subheading: `
    block
    mt-3
    font-mono
    text-xtiny text-(--foreground)/80
  `,
  content: `
    flex flex-col justify-between
    leading-[1.25]
    font-mono
    text-tiny text-(--foreground)/50
    uppercase

    md:flex-row
  `,
  upper: `
    absolute top-4 right-4 left-4 z-2
    gap-2
    w-50

    md:gap-0
    md:w-auto
  `,
  lower: `
    absolute bottom-4 right-4 left-4 z-2
    w-auto
    gap-0.25
    text-right

    md:gap-0
    md:text-left
  `,
  location: `
    text-xtiny
  `,
  code: `
    text-xtiny text-right
  `,
  line: `
    block
  `,
});

export default styles;
