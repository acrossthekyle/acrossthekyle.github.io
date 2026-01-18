import tw from '@/styles';

const styles = tw({
  container: `
    flex justify-between
    max-w-lg
    text-xs
    uppercase
    font-mono
  `,
  anchor: `
    md:fixed
    md:top-8
    md:left-8
    md:z-9
  `,
  nav: `
    flex items-center gap-4

    md:fixed
    md:top-8
    md:right-8
    md:z-9
  `,
  list: `
    flex gap-4
  `,
});

export default styles;
