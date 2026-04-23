import tw from '@/styles';

const styles = tw({
  container: `
    relative z-1
    flex flex-col justify-center gap-6
    w-full max-w-lg
    h-full
    my-0 mx-auto
    cursor-auto
    pointer-events-auto
    text-sm
  `,
  header: `
    text-xl
    font-medium

    lg:text-base
  `,
  subheader: `
    block
    font-normal
    text-sm
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
});

export default styles;
