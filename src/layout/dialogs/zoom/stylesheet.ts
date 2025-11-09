import tw from '@/styles';

const styles = {
  backdrop: (canBlur: boolean) => tw(`
    fixed inset-0
    backdrop-blur-md
    bg-black/20
    cursor-default

    ${canBlur ? (`
      opacity-100
      translate-x-0
      z-9998

      [transition:opacity_.5s_var(--ease-in-out),translate_0s]
    `) : (`
      opacity-0
      translate-x-full
      z-0

      [transition:opacity_.5s_var(--ease-in-out),translate_0s_linear_.5s]
    `)}
  `),
  dialog: (isZoomed: boolean) => tw(`
    absolute
    transform-gpu duration-250

    ${isZoomed ? `
      z-9999
      opacity-100
      fixed
    ` : `z-0 opacity-0`}
  `),
  caption: (isLandscapeOrientation: boolean, isZoomed: boolean) => tw(`
    absolute top-4 left-4 right-4 z-4
    font-normal
    text-xs
    ${isLandscapeOrientation ? 'text-right' : 'text-center'}
    uppercase

    ${isZoomed ? 'duration-300 delay-200' : ''}
    ${isZoomed ? 'opacity-100' : 'opacity-0'}
  `),
};

export default styles;
