import tw from '@/styles';

const styles = tw({
  gallery: (hasEnteredView: boolean) => tw(`
    absolute z-3 bottom-1.5
    p-2
    duration-200

    ${hasEnteredView ? 'opacity-100' : 'opacity-0'}

    ml:top-4.5
    ml:bottom-auto
  `),
  previous: `
    right-20

    ml:left-6
    ml:right-auto
  `,
  next: `
    right-2

    ml:left-16
    ml:right-auto
  `,
  arrow: `
    h-6 w-6
    stroke-2
    stroke-white/80
  `,
  index: (hasEnteredView: boolean) => tw(`
    absolute bottom-4 right-12 z-3
    text-sm text-white/80
    font-black
    duration-200

    ${hasEnteredView ? 'opacity-100' : 'opacity-0'}

    ml:top-7
    ml:bottom-auto
    ml:right-6
  `),
  slash: `
    inline
    stroke-4 stroke-white/80
    h-2.5
    w-2.5
    -mt-0.5
  `,
});

export default styles;
