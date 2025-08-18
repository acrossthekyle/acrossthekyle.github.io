import tw from '@/styles';

const styles = tw({
  gallery: (hasEnteredView: boolean) => tw(`
    absolute z-3 bottom-1.5
    p-2
    duration-200

    ${hasEnteredView ? 'opacity-100' : 'opacity-0'}

    ml:bottom-auto
    ml:top-2.5
    2ml:top-4.5
  `),
  previous: `
    right-16.5

    2ml:right-21
  `,
  next: `
    right-0.5

    2ml:right-4
  `,
  arrow: `
    h-5 w-5
    stroke-3
    stroke-white/90
  `,
  index: (hasEnteredView: boolean) => tw(`
    absolute right-10 bottom-3.5 z-3
    text-sm text-white/90
    font-mono font-bold
    duration-200

    ${hasEnteredView ? 'opacity-100' : 'opacity-0'}

    ml:top-4.5
    ml:bottom-auto
    2ml:top-6.5
    2ml:right-14
  `),
});

export default styles;
