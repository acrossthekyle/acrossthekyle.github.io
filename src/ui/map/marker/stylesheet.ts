import tw from '@/styles';

const styles = {
  container: (invert?: boolean) => tw(`
    absolute z-2
    w-3 h-3
    stroke-2 ${invert ? 'stroke-(--background)' : 'stroke-(--foreground)'}
  `),
};

export default styles;
