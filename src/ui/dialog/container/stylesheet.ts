import tw from '@/styles';

const styles = tw({
  container: `
    relative
    max-w-full
    h-full max-h-full
    bg-transparent

    md:pt-16
  `,
  close: `
    absolute top-4 right-4
    p-2

    md:fixed
    md:right-10
    md:top-12
  `,
  icon: `
    w-6 h-6
    stroke-1

    md:w-6
    md:h-6
  `,
  hint: `
    hidden
    text-tiny
    !mb-0

    md:block
    md:fixed
    md:right-14
    md:bottom-13
    md:top-auto
  `,
});

export default styles;
