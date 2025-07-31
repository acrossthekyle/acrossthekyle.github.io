import tw from '@/styles';

const styles = tw({
  container: `
    w-full
  `,
  header: `
    relative z-1
  `,
  categories: `
    relative
    flex justify-start gap-6
    ps-10
  `,
  category: `
    relative z-1
    duration-500
    text-xs text-white font-normal uppercase
    cursor-pointer

    hover:text-yellow-300
  `,
  title: `
    w-full
    ms-8
    text-3xl font-black uppercase

    5xs:text-5xl
    3xs:text-5xl
    2xs:text-6xl
    sm:text-7xl
    sm:max-w-xl
    md:text-8xl
    md:max-w-2xl
    lg:max-w-4xl
    lg:text-9xl
  `,
  body: `
    flex flex-col
    my-0 mx-auto
    w-full
  `,
  hero: `
    relative -top-21 z-0
    h-184
    w-full
  `,
  image: `
    rounded-lg
    aspect-3/2
    object-cover
    w-full h-full
    opacity-80
  `,
  intro: `
    relative
    ps-8
    -mt-12 mb-12
    w-full max-w-lg
    text-4xl/9 font-black uppercase font-stretch-ultra-condensed
  `,
  location: `
    absolute inset-0 z-2
    flex items-end justify-end
    pe-12 pb-10
    text-7xl text-white/40 font-black uppercase font-stretch-ultra-condensed
  `,
});

export default styles;
