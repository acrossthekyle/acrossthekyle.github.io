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
    text-tiny
  `,
  copyright: `
    !mb-0
    text-tiny
  `,
});

export default styles;
