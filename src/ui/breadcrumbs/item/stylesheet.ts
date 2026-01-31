import tw from '@/styles';

const styles = {
  container: (highlight?: boolean) => tw(`
    inline-block
    text-xs ${highlight ? 'text-current/85' : 'text-current/60'}
    font-mono
    ${highlight && 'font-bold'}
    uppercase truncate
    duration-300

    hover:text-current/100

    md:text-tiny
  `),
};

export default styles;
