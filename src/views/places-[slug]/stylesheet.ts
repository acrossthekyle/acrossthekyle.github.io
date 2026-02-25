import tw from '@/styles';

const styles = tw({
  stats: `
    grid grid-cols-1 gap-6
    mt-16

    sm:grid-cols-2
  `,
  gpx: `
    flex flex-col gap-6

    sm:gap-2
  `,
  link: `
    flex gap-2
    leading-6
  `,
  title: `
    flex-1
    ml-2

    sm:ml-0
  `,
});

export default styles;
