import tw from '@/styles';

const styles = {
  inner: (isPressed: boolean) => tw(`
    fixed z-9999
    ${isPressed ? 'w-6 h-6' : 'w-4 h-4'}
    rounded-full
    bg-white
    -translate-1/2
    pointer-events-none
    transition-[width,height,border]
    duration-200
  `),
  outer: (isPressed: boolean) => tw(`
    fixed left-0 top-0 z-9999
    ${isPressed ? 'w-4 h-4' : 'w-12 h-12'}
    rounded-full
    border border-white/75
    ${isPressed ? `
      translate-x-[calc(-50%_+_.5rem)]
      translate-y-[calc(-50%_+_.5rem)]
    ` : `
      translate-x-[calc(-50%_+_1.5rem)]
      translate-y-[calc(-50%_+_1.5rem)]
    `}
    pointer-events-none
    duration-200
  `),
};

export default styles;
