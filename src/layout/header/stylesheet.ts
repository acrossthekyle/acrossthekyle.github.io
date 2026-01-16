import tw from '@/styles';

const styles = tw({
  container: `
    flex justify-between
    w-full max-w-lg
    my-0 mx-auto

    lg:block
  `,
  anchor: `
    text-xs
    uppercase

    lg:fixed
    lg:top-8
    lg:left-8
    lg:z-9
  `,
  nav: `
    text-xs
    uppercase

    lg:fixed
    lg:top-8
    lg:right-8
    lg:z-9
  `,
});

export default styles;
