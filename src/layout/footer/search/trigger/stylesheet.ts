import tw from '@/styles';

const styles = tw({
  container: `
    relative -left-2 -bottom-2
    flex items-center gap-1
    w-22
    p-2

    md:fixed
    md:bottom-12
    md:left-12
    md:z-0
  `,
  icon: `
    w-5 h-5

    md:w-3.5
    md:h-3.5
  `,
  kbd: `
    hidden
    items-center gap-1

    md:flex
    md:ml-1
  `,
});

export default styles;
