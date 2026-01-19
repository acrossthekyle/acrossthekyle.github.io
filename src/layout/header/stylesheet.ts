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
    flex flex-col-reverse items-end gap-4

    xs:flex-row
    md:fixed
    md:top-8
    md:right-8
    md:z-9
  `,
  list: `
    flex flex-col items-end gap-3

    xs:flex-row
    xs:gap-4
  `,
});

export default styles;
