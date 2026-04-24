import tw from '@/styles';

const styles = tw({
  container: `
    relative z-1
    flex flex-col gap-6
    w-full max-w-lg
    h-full
    my-0 mx-auto
    cursor-auto
    pointer-events-auto
    text-sm

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
    flex items-center justify-between gap-4
    w-full
  `,
  author: `
    flex flex-col gap-0
    text-sm
    not-italic
    leading-[1]
  `,
  title: `
    block
    text-xs
  `,
  signature: `
    font-signature
    text-xs
  `,
  spacer: `
    block
    pb-6 w-full

    lg:pb-0
  `,
  close: `
    absolute -top-1.25 -right-2 z-1
    p-2

    lg:top-18
  `,
  icon: `
    w-4 h-4
  `,
});

export default styles;
