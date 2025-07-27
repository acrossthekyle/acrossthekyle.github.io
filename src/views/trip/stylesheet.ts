import tw from '@/styles';

const styles = tw({
  container: `
    relative
    w-full
  `,
  screen: `
    relative
    w-full max-w-5xl
    my-0 mx-auto
    h-auto py-6
  `,
  header: `
    flex flex-col items-center justify-center

    sm:mb-12
  `,
  categories: `
    flex flex-col items-center justify-center gap-0

    5xs:flex-row
    5xs:gap-4
    3xs:gap-8
  `,
  category: `
    w-full
    duration-500
    text-xs text-white font-semibold uppercase
    cursor-pointer

    hover:text-yellow-300

    sm:font-black
  `,
  title: `
    w-full
    mt-6 mb-6
    text-3xl font-black uppercase tracking-wide text-center

    5xs:text-5xl
    3xs:text-5xl
    2xs:text-6xl
    sm:text-7xl
    sm:max-w-xl
    sm:mt-10
    sm:mb-12
    md:text-8xl
    md:max-w-2xl
    lg:max-w-4xl
    lg:text-9xl
  `,
  excerpt: `
    relative
    w-full
    text-sm font-medium text-center

    2xs:text-base
    2xs:max-w-2xs
    sm:max-w-sm
  `,
  body: `
    relative
    flex flex-col items-center
    my-0 mx-auto
    w-full max-w-5xl
  `,
  hero: `
    object-cover
    w-full h-120
    rounded-4xl
    opacity-80

    xs:h-140
    sm:h-180
  `,
  intro: `
    flex flex-col items-center text-center gap-14

    sm:flex-col
    sm:gap-20
    md:my-40
  `,
  heading: `
    relative
    w-full
    text-md font-bold

    2xs:max-w-xs
    2xs:text-2xl
    xs:max-w-sm
    xs:text-3xl
    sm:max-w-lg
    sm:text-4xl/11
    sm:text-center
    md:max-w-2xl
    md:text-5xl/14
  `,
  stats: `
    grid grid-cols-2 grid-rows-2 gap-8
    w-full max-w-2xs
    mt-4 mb-8
    font-medium
    text-center

    3xs:max-w-5xl
    3xs:text-left
    3xs:gap-10
    3xs:grid-cols-2
    3xs:grid-rows-2
    sm:mt-20
    md:grid-cols-4
    md:grid-rows-1
    md:gap-12
  `,
  eyebrow: `
    flex flex-col gap-3
    text-lg font-black
    mb-2

    2xs:text-xl
    sm:text-2xl
    md:text-3xl
    md:mb-8
  `,
  text: `
    hidden

    sm:inline
  `,
  explore: `
    hidden
    py-4 px-6
    rounded-xl
    bg-yellow-300
    cursor-pointer
    text-sm text-black font-bold text-center uppercase
    duration-500

    hover:bg-white
  `,


  subheading: `
    relative
    w-full
    mb-4
    text-lg font-black text-center

    2xs:text-xl
    xs:text-2xl
    md:text-3xl
  `,
  dates: `
    font-bold text-center
  `,
  year: `
    block
    mb-2
    text-sm font-normal
  `,
  timeline: `
    relative
    mt-16 mb-48
  `,
  step: `
    group
    relative
    h-44 w-164
    pointer-events-none

    before:absolute
    before:left-1/2
    before:-l-px
    before:-bottom-26
    before:h-36
    before:w-px
    before:bg-white
    before:rounded-full

    after:absolute
    after:top-1/2
    after:mt-6
    after:rounded-full
    after:w-4
    after:h-4
    after:bg-(--background)
    after:border-1
    after:border-white

    [:nth-child(1n)]:after:left-1/2
    [:nth-child(1n)]:after:-ml-2
    [:nth-child(1n)]:after:right-auto
    [:nth-child(2n)]:after:left-auto
    [:nth-child(2n)]:after:right-1/2
    [:nth-child(2n)]:after:-mr-2

    last:before:hidden
  `,
  figure: `
    absolute
    h-60 w-60
    pointer-events-auto
    cursor-pointer
    transform-gpu duration-500
    grayscale-100
    opacity-65

    hover:scale-105
    hover:shadow-2xl/50
    hover:shadow-black
    hover:grayscale-0
    hover:opacity-80

    group-[:nth-child(1n)]:right-0
    group-[:nth-child(1n)]:left-auto
    group-[:nth-child(2n)]:right-auto
    group-[:nth-child(2n)]:left-0
  `,
  preview: `
    rounded-3xl
    aspect-square
    object-cover
  `,
  caption: `
    absolute bottom-8 left-8 right-8
    text-sm/4 font-black uppercase

    group-[:nth-child(1n)]:text-left
    group-[:nth-child(2n)]:text-right
  `,




  footer: `
    relative
    w-full max-w-5xl
    my-0 mx-auto
    flex justify-center gap-8
    py-12 pt-12

    sm:justify-between
    sm:gap-0
    sm:pt-0
  `,
  navigation: `
    flex items-center gap-2
    cursor-pointer
    text-xs font-bold uppercase
    duration-500
    text-white

    hover:text-yellow-300
  `,
  icon: `
    w-3 h-3
    stroke-2
  `,
});

export default styles;
