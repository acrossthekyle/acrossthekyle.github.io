import tw from '@/styles';

const styles = tw({
  figure: (isFullscreen: boolean) => tw(`
    relative
    transform-gpu duration-400

    ${isFullscreen ? `
      h-full
    ` : `
      aspect-square

      xs:aspect-auto
    `}
  `),
  toggle: (isInView: boolean) => tw(`
    hidden
    absolute right-4 bottom-3.5 z-2
    uppercase
    font-black
    text-white/80
    duration-200

    2ml:bottom-7.5
    2ml:right-8
    ml:block

    hover:text-white

    ${isInView ? `
      opacity-100
    ` : `
      opacity-0
    `}
  `),
});

export default styles;
