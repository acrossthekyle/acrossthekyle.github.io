import tw from '@/styles';

const styles = {
  container: (uppercase?: boolean) => tw(`
    block

    ${uppercase && `uppercase`}
  `),
};

export default styles;
