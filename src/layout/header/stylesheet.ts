import tw from '@/styles';

const styles = tw({
  container: `
    flex justify-between items-start
    max-w-lg
    text-sm
    uppercase

    md:text-xs
    md:items-center
  `,
  anchor: `
    text-base

    md:text-sm
  `,
  nav: `
    flex flex-row-reverse items-center gap-4

    md:flex-row
  `,
  list: `
    hidden
    items-end gap-5

    md:flex
  `,
  link: `
    relative
    font-light font-serif
    italic

    before:absolute
    before:z-0
    before:-top-1.25
    before:-bottom-1.25
    before:-left-1.5
    before:-right-1.5
    before:rounded-sm
    before:opacity-0
    before:duration-300
    before:bg-(--foreground)/10

    hover:before:opacity-100

    md:font-normal
    md:font-sans
    md:not-italic
  `,
  theme: `
    hidden

    md:block
    md:fixed
    md:bottom-8
    md:right-8
  `,
});

export default styles;
