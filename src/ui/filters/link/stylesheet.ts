import tw from '@/styles';

const styles = tw({
  link: (isActive: boolean) => tw(`
    inline-block
    text-tiny ${isActive ? 'text-yellow-300/90' : ''}
    font-medium
    uppercase
    overflow-hidden
    duration-300

    hover:text-white/50

    hecto:text-xs
  `),
});

export default styles;
