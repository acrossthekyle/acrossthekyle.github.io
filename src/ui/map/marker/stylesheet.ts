import tw from '@/styles';

const styles = {
  container: (highlight?: boolean, invert?: boolean) => tw(`
    absolute ${highlight ? 'z-3' : 'z-2'}
    w-3 h-3
    stroke-2 ${invert ? 'stroke-(--background)' : 'stroke-(--foreground)'}
    ${highlight && '!stroke-orange-500'}
  `),
};

export default styles;
