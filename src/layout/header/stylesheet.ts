import tw from '@/styles';

const styles = tw({
  container: `
    flex items-start justify-between
    w-full max-w-lg
    my-0 mx-auto
    mb-16

    md:max-w-none
    md:fixed
    md:left-0
    md:right-0
    md:top-0
    md:z-0
    md:p-14
    md:my-auto
    md:mb-0
  `,
  anchor: `
    relative -top-2 -left-2
    p-2
  `,
});

export default styles;
