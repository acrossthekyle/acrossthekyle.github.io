import tw from '@/styles';

const styles = tw({
  container: `
    absolute left-0 bottom-2 z-1
    flex flex-col gap-4
    w-full
    pl-4
    cursor-auto
    pointer-events-auto

    min-[340px]:bottom-auto
    min-[340px]:top-1/2
    min-[340px]:left-1/2
    min-[340px]:-translate-y-1/2
    min-[340px]:-translate-x-1/2
    min-[340px]:w-auto
    min-[340px]:pl-0
    lg:flex-row
    lg:gap-12
  `,
  close: (isOpen: boolean) => tw(`
    absolute top-4 right-4 z-1
    p-2

    ${isOpen ? 'motion-safe:opacity-0 motion-safe:animate-fade-in-down-slightly-delayed' : 'motion-safe:animate-fade-out-up'}
  `),
  x: `
    w-4.5 h-4.5

    lg:w-4
    lg:h-4
  `,
  controls: `
    flex flex-col items-start gap-0
    cursor-auto
    pointer-events-auto

    min-[340px]:flex-row
    min-[340px]:items-center
  `,
  heading: `
    mb-2
    text-sm
    capitalize

    min-[340px]:mr-2
    min-[340px]:mb-0
    lg:text-xs
  `,
  button: (isActive: boolean) => tw(`
    flex items-center gap-2
    py-2 px-0
    text-sm
    capitalize

    min-[340px]:px-2
    lg:text-xs

    motion-safe:duration-300
    motion-safe:hover:opacity-100
    ${isActive ? 'motion-safe:opacity-100' : 'motion-safe:opacity-50'}
  `),
  icon: `
    w-4 h-4

    lg:w-3.5
    lg:h-3.5
  `,
});

export default styles;
