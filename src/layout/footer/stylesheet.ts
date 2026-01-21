import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col items-end gap-2
    w-full max-w-lg
    my-0 mx-auto

    sm:flex-row
    sm:justify-between
  `,
  nav: `
    w-full
  `,
  links: `
    flex flex-row justify-start gap-4
    text-sm
    mb-2

    md:justify-none
    md:mb-0
    md:text-xs
  `,
  copyright: `
    w-full
    !mb-0
    text-sm text-left

    md:text-right
    md:text-xs
  `,
});

export default styles;
