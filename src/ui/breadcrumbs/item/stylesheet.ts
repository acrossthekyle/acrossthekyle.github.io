import tw from '@/styles';

const styles = {
  container: (highlight?: boolean) => tw(`
    inline-block
    text-xs ${highlight ? 'text-current/90' : 'text-current/75'}
    ${highlight && 'font-medium'}
    uppercase truncate
    duration-300

    hover:text-current/100
  `),
};

export default styles;
