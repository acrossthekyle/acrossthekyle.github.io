import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col items-end gap-2
    w-full max-w-lg
    my-0 mx-auto
    font-mono

    sm:flex-row
    sm:justify-between
  `,
  links: `
    flex flex-row gap-4
    text-sm
    mb-2

    md:mb-0
    md:text-xs
  `,
  copyright: `
    !mb-0
    text-sm

    md:text-xs
  `,
});

export default styles;
