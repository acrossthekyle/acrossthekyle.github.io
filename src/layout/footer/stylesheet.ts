import tw from '@/styles';

const styles = tw({
  container: `
    w-full max-w-lg
    my-0 mx-auto

    lg:flex
    lg:justify-between
  `,
  links: `
    flex flex-row gap-6
    mb-2

    lg:mb-0
  `,
  copyright: `
    !mb-0
    mr-8
    font-mono
    text-tiny

    lg:mr-0
  `,
});

export default styles;
