import tw from '@/styles';

const styles = tw({
  container: `
    flex justify-between
    max-w-lg
    text-sm
    uppercase

    md:text-xs
  `,
  anchor: `
    text-base
    font-mono

    md:fixed
    md:top-8
    md:left-8
    md:z-9
    md:text-sm
  `,
  nav: `
    flex flex-row-reverse items-center gap-4

    md:flex-row
    md:items-end
    md:fixed
    md:top-8
    md:right-8
    md:z-9
  `,
  list: `
    hidden
    items-end gap-3

    md:flex
  `,
  link: `
    duration-300
    border-b-1 border-b-transparent

    hover:border-b-white
  `,
});

export default styles;
