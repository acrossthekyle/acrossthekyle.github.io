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
    text-sm

    md:fixed
    md:top-8
    md:left-8
    md:z-9
  `,
  nav: `
    flex items-center gap-4

    md:items-end
    md:fixed
    md:top-8
    md:right-8
    md:z-9
  `,
  list: `
    hidden
    flex-col items-end gap-3

    xs:flex-row
    xs:gap-4
    md:flex
  `,
});

export default styles;
