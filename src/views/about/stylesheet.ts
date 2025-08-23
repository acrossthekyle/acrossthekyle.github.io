import tw from '@/styles';

const styles = tw({
  title: `
    mt-6

    md:hidden
  `,
  hero: `
    mt-6
    text-2xl text-left text-white/90
    font-black font-stretch-semi-condensed
    uppercase

    3xs:text-justify
    sm:mt-0
    sm:text-3xl
    md:text-4xl
    ml:text-5xl
    xl:text-6xl
    3xl:text-7xl
    4xl:text-8xl
  `,
  tab: `
    inline-block
    w-0

    xl:w-60
  `,
  since: `
    inline-block
    mt-2
    p-2 py-1
    text-black text-tiny
    font-normal font-mono
    bg-yellow-300

    sm:text-xs
  `,
  introduction: `
    flex flex-col gap-10
    my-10

    2ml:flex-row
  `,
  blurb: `
    flex-1
    text-lg text-left text-white/90

    sm:text-justify
    sm:text-xl
    3xl:text-2xl
    4xl:text-4xl
  `,
  socials: `
    block
    mt-6
    font-mono
    text-sm text-white/90

    xl:mt-12
    4xl:text-lg
  `,
  me: `
    flex-2
    font-mono
    text-sm text-left text-white/90

    sm:text-right
    4xl:text-lg
  `,
  image: `
    aspect-3/2
    h-20
    rounded-full
    object-cover
    object-top
    brightness-90
    grayscale-100

    5xs:h-24
    4xs:h-28
    3xs:h-34
    xs:h-44
    sm:h-54
    md:h-44
    mp:h-54
    ml:h-48
    lg:h-50
    2ml:h-30
    sl:h-40
    sx:h-48
    3xl:h-64
    4xl:h-96
  `,
  at: `
    block
    text-yellow-300
  `,
  link: `
    text-yellow-300
  `,
  section: `
    flex flex-col-reverse gap-10
    mt-10 pt-10
    border-t-2 border-t-white/20 border-dashed

    2ml:flex-row
    xl:mt-20
    xl:pt-20
  `,
  left: `
    flex-1
  `,
  paragraph: `
    mb-4
    text-lg text-white/90 text-justify

    4xl:text-3xl
  `,
  right: `
    flex-1
    flex flex-col gap-10 justify-between

    4xs:flex-row
  `,
  heading: `
    w-40
    text-2xl text-white/90
    font-black
    uppercase

    xl:w-50
    xl:text-4xl
    4xl:text-5xl
  `,
  subheading: `
    text-lg text-white/90
    font-black
    uppercase

    4xl:text-2xl
  `,
  timeline: `
    w-50
    text-left

    4xs:text-right
  `,
  list: `
    flex flex-col gap-4
    mt-4
  `,
  place: `
    text-white/90
    font-light
    uppercase

    4xl:text-2xl
  `,
  when: `
    text-sm text-white/90
    font-light

    4xl:text-xl
  `,
});

export default styles;
