import tw from '@/styles';

const styles = {
  figure: (hoverable?: boolean) => tw(`
    ${hoverable && 'group/figure'}

    relative
    overflow-hidden
    rounded-sm
  `),
};

export default styles;
