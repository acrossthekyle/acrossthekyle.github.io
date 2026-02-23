import tw from '@/styles';

const styles = tw({
  container: `
    fixed
    max-w-full
    h-full max-h-full
    bg-transparent
  `,
  close: `
    absolute top-15.75 right-3.5
    p-2

    md:fixed
    md:right-10.75
    md:top-12
  `,
  icon: `
    w-6 h-6
    stroke-1
  `,
  hint: `
    hidden
    text-tiny
    p-2

    md:block
    md:fixed
    md:right-12
    md:bottom-11
    md:top-auto
  `,
});

export default styles;
