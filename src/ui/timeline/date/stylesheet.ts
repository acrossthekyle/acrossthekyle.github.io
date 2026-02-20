import tw from '@/styles';

const styles = {
  container: (shrink?: boolean) => tw(`
    absolute left-6.5 top-0
    inline-block
    ${shrink ? 'w-18' : 'min-w-7'}
    pt-1.5 mr-2
    text-start text-xs text-current/60

    md:relative
    md:left-auto
    md:top-auto
  `),
};

export default styles;
