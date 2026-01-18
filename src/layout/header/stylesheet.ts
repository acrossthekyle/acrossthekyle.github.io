import tw from '@/styles';

const styles = tw({
  container: `
    flex justify-between
    w-full max-w-lg
    my-0 mx-auto
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
});

export default styles;
