import tw from '@/styles';

const styles = tw({
  container: `
    inline-block
    pl-0.25
    lowercase
    overflow-hidden
    text-ellipsis text-sm
    whitespace-nowrap

    first:text-clip
    first:whitespace-normal
    first:overflow-auto
    first:pl-0
  `,
});

export default styles;
