import tw from '@/styles';

const styles = tw({
  close: (isOpen: boolean) => tw(`
    absolute top-4 right-4 z-3
    p-2

    ${isOpen ? 'motion-safe:opacity-0 motion-safe:animate-fade-in-down-slightly-delayed' : 'motion-safe:animate-fade-out-up'}
  `),
  x: `
    w-4.5 h-4.5

    lg:w-4
    lg:h-4
  `,
  container: `
    relative left-1/2 z-1
    -translate-x-1/2

    flex flex-col
    w-full max-w-lg
    py-4 px-5
    text-sm
    cursor-auto
    pointer-events-auto

    sm:py-10
    lg:p-6
  `,
  items: `
    flex flex-col gap-4
    mb-4
  `,
  item: `
    flex items-start gap-4
  `,
  icon: `
    mt-2
    opacity-20

    w-4
    h-4
  `,
  label: `
    block
    mb-0.5
    opacity-25
  `,
  data: `
    block
    w-full
  `,
  paragraph: `
    mb-2

    last:mb-0
  `,
  map: `
    absolute top-0 right-4 z-0
    w-50

    sm:w-70
  `,
});

export default styles;
