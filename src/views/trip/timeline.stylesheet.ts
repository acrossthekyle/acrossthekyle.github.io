import tw from '@/styles';

const styles = tw({
  title: `
    flex items-center
    w-full
    ps-8 mt-10 mb-16
    text-4xl/9 text-yellow-300 font-black uppercase font-stretch-ultra-condensed
  `,
  description: `
    relative
    w-full max-w-xl
    mb-16
    ps-8
    text-2xl font-extralight text-left font-stretch-condensed
  `,
  timeline: `
    relative
    grid grid-cols-2 gap-x-14
    w-full
    mb-10
    px-8
  `,
  step: (hasEnteredView: boolean) => tw(`
    group
    relative
    py-4
    duration-800

    ${hasEnteredView ? `animate-slide-in-left` : 'opacity-0'}
  `),
  cta: (isActive: boolean) => tw(`
    relative
    w-full
    pe-12
    text-4xl text-white font-black uppercase text-left
    cursor-pointer
    duration-500

    ${isActive ? 'text-yellow-300' : ''}

    hover:text-yellow-300
  `),
  plus: (isActive: boolean) => tw(`
    absolute -left-10 top-1
    w-8 h-8
    stroke-1
    duration-100 ease-in

    ${isActive ? 'rotate-45' : 'rotate-0'}
  `),
  index: `
    absolute right-0
    text-3xl text-white/5 font-black font-stretch-ultra-condensed text-right
  `,
  date: `
    text-xl text-stone-400 font-medium uppercase font-stretch-ultra-condensed
  `,
  details: (isActive: boolean) => tw(`
    overflow-hidden
    duration-500

    ${isActive ? 'h-110' : 'h-0'}
  `),
  inner: (isActive: boolean) => tw(`
    relative
    h-110
    border-b

    ${isActive ? 'border-b border-b-white/5' : 'border-b-white/0'}
  `),
  stats: `
    absolute inset-0 bottom-0 right-0
    h-104
    flex flex-row justify-end items-end gap-6
    text-right
  `,
  label: `
    text-tiny text-yellow-300 font-bold uppercase
  `,
  value: `
    text-base text-white font-semibold
  `,
  units: `
    ps-1
    text-base text-white font-semibold uppercase font-stretch-ultra-condensed
  `,
  figure: `
    pt-8 pb-20
    h-full
  `,
  preview: `
    w-full h-full
    rounded-lg
    object-cover
    opacity-90
  `,
  views: `
    absolute bottom-6 left-0 z-1
    rounded-lg
    flex gap-4
  `,
  view: `
    text-xl text-white uppercase font-black
    cursor-pointer
    duration-300

    hover:text-yellow-300
  `,
  icon: `
    w-4 h-4
    stroke-2
    stroke-white
  `,
});

export default styles;
