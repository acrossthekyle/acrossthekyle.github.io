import tw from '@/styles';

const styles = tw({
  link: (isActive: boolean) => tw(`
    inline-block
    text-tiny ${isActive ? 'text-yellow-300/90' : 'text-white/90'}
    font-medium
    uppercase
    overflow-hidden
    duration-300
    pt-1

    hover:text-white/50

    lg:text-xs
  `),
});

export default styles;
