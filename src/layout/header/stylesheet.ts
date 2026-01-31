import tw from '@/styles';

const styles = tw({
  container: `
    flex justify-between
    max-w-lg
  `,
  anchor: `
    relative
    w-8 h-8
  `,
  list: `
    hidden
    gap-5
    mt-2

    md:flex
  `,
  link: `
    block
    relative
    font-extrablack
    text-2xl

    before:absolute
    before:z-0
    before:-top-1.25
    before:-bottom-1.25
    before:-left-1.5
    before:-right-1.5
    before:rounded-sm
    before:opacity-0
    before:duration-300
    before:bg-(--foreground)/5

    hover:before:opacity-100

    md:before:bg-(--foreground)/10
    md:uppercase
    md:font-normal
    md:text-xs
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
