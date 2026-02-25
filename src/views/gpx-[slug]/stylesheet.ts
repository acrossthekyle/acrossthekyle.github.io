import tw from '@/styles';

const styles = tw({
  stats: `
    grid grid-cols-1 gap-6
    !pb-0

    xs:grid-cols-2
    md:grid-cols-3
  `,
  nav: `
    flex justify-between gap-8
  `,
});

export default styles;
