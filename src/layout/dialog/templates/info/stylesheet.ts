import tw from '@/styles';

const styles = tw({
  container: `
    absolute bottom-4 left-1/2 z-1
    -translate-x-1/2

    flex flex-col gap-4
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
  `,
  header: `
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
  figure: `
    flex items-center gap-4
    w-full
    mt-2
  `,
  image: `
    !w-12
  `,
  caption: `
    flex items-end justify-between gap-4
    w-full
  `,
  author: `
    flex flex-col gap-0
    text-sm
    not-italic
  `,
  signature: `
    font-signature
    text-lg
  `,
  title: `
    block
    text-xs
    leading-[1]
  `,
  links: `
    flex items-center gap-2
  `,
  link: `
    flex items-center gap-2
    py-1 px-2
    text-xs
  `,
});

export default styles;
