import tw from '@/styles';

const styles = tw({
  container: `
    px-0
  `,
  close: `
    absolute top-6 right-6

    md:right-8
    md:top-16
  `,
  icon: `
    w-7.5 h-7.5
    stroke-1

    md:w-6
    md:h-6
  `,
  hint: `
    text-tiny
    !mb-0

    md:fixed
    md:right-8
    md:bottom-6
  `,
});

export default styles;
