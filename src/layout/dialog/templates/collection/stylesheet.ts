import tw from '@/styles';

const styles = tw({
  container: `
    absolute bottom-4 left-1/2 z-1
    -translate-x-1/2

    w-full max-w-2xl
    h-auto

    p-4

    cursor-auto
    pointer-events-auto

    text-sm text-current/70
    font-normal

    bg-(--background)
    rounded-xl
    shadow-2xl

    overflow-y-scroll

    constrained:h-full

    lg:gap-4
  `,
  header: `
    mb-4
    pb-4
    text-base
    font-medium
    border-b-1 border-current/5
  `,
  subheader: `
    block
    font-normal
    text-xs
    opacity-60

    lg:text-tiny
  `,
  close: `
    absolute top-4 right-4 z-1
    px-1.5 py-0.5
    text-tiny
    font-normal font-mono
    rounded-sm

    motion-safe:opacity-50
    motion-safe:duration-300
    motion-safe:hover:opacity-100
    motion-safe:focus:opacity-100
  `,
  icon: `
    w-4.5 h-4.5

    lg:w-4
    lg:h-4
  `,
  content: `
    flex items-start gap-12
  `,
  notes: `
    flex-4
    flex flex-col gap-2
  `,
  aside: `
    flex-1
  `,
  footer: `
    flex items-end justify-between gap-4
    mt-4
    pt-4
    border-t-1 border-current/5
  `,
  tags: `
    flex items-center gap-2
  `,
  tag: `
    rounded-sm
    px-1.25 py-1 pb-0.75
    bg-yellow-300
    font-normal
    text-black
    leading-[1]
    text-xtiny
    uppercase
    tracking-wider

    motion-safe:duration-300
    motion-safe:hover:bg-yellow-400
  `,
  coordinates: `
    font-light
    text-tiny
  `,
});

export default styles;
