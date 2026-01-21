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

    md:text-sm
  `,
  nav: `
    flex flex-row-reverse items-center gap-4

    md:flex-row
  `,
  list: `
    hidden
    items-end gap-4

    md:flex
  `,
  link: `
    relative

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
  `,
});

export default styles;
