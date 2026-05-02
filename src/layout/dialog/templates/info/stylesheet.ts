import tw from '@/styles';

const styles = tw({
  container: `
    relative z-1
    flex flex-col gap-6
    w-full max-w-lg
    h-full
    my-0 mx-auto
    py-4 px-5
    cursor-auto
    pointer-events-auto
    text-sm

    sm:py-10
    lg:justify-center
  `,
  header: `
    text-sm
    font-medium
  `,
  subheader: `
    block
    font-normal
    text-xs
    opacity-60
  `,
  figure: `
    flex items-center gap-4
    w-full
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
  title: `
    block
    text-xs
    leading-[1]
  `,
  signature: `
    font-signature
    text-lg
  `,
  spacer: `
    block
    pb-1 w-full

    lg:pb-0
  `,
  close: `
    absolute top-2 right-2 z-1
    p-2

    sm:top-8
    lg:top-32
  `,
  icon: `
    w-4.5 h-4.5

    lg:w-4
    lg:h-4
  `,
  links: `
    flex items-center gap-2
    -mr-2
  `,
  link: `
    flex items-center gap-2
    py-1 px-2
    text-xs
  `,
  external: `
    w-4 h-4

    lg:w-3
    lg:h-3
  `,
});

export default styles;
