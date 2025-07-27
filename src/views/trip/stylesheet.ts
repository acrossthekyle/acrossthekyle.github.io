import tw from '@/styles';

const styles = tw({
  container: `
    relative
    w-full
  `,
  header: `
    relative
    flex flex-col items-center justify-center
    w-full
    pt-8 pb-24
    text-center
  `,
  categories: `
    flex items-center gap-8
    mt-6 mb-10
  `,
  category: `
    w-full
    duration-500
    text-tiny text-white font-black uppercase
    cursor-pointer

    hover:text-yellow-300
  `,
  title: `
    w-full max-w-2xl
    mb-4
    text-8xl font-black uppercase tracking-wide
  `,
  figure: `
    group
    relative
    w-full max-w-5xl
    h-dvh py-12
  `,
  image: `
    object-cover
    w-full h-full
    rounded-4xl
    opacity-80

    duration-800
  `,
  location: `
    mt-4
    text-xs font-normal uppercase text-center
  `,
  heading: `
    relative
    mt-60 mb-6
    w-full max-w-2xl
    text-5xl/14 font-bold text-center
  `,
  excerpt: `
    relative
    w-full max-w-lg
    text-base font-normal text-center
  `,
  subheading: `
    relative
    w-full max-w-2xl
    mb-6
    text-5xl font-bold text-center
  `,
  body: `
    relative
    flex flex-col items-center
    my-0 mx-auto
    w-full max-w-5xl
  `,
  previews: [
    'flex flex-col gap-32',
    'w-full max-w-md',
    'my-60',
  ],
  preview: `
    object-cover
    w-full h-full
    opacity-90
  `,
  small: [
    'h-102',
    'rounded-3xl',
    'overflow-hidden',
  ],
  large: [
    'h-152',
    'rounded-3xl',
    'overflow-hidden',
  ],
  stats: `
    grid grid-cols-2 grid-rows-2 gap-12
    w-full max-w-2xl
    mt-14 mb-8
    font-medium
    text-center
  `,
  index: [
    'text-base font-semibold',
  ],
  statheading: `
    flex flex-col gap-3
    text-3xl font-black
    mb-8
  `,
  explore: `
    py-4 px-12
    mt-12
    rounded-xl
    bg-yellow-300
    cursor-pointer
    text-sm text-black font-bold text-center uppercase
    duration-500

    hover:bg-white
  `,
  footer: `
    relative
    w-full max-w-5xl
    my-0 mx-auto
    flex justify-between
    py-12
    mt-24
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
