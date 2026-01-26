import tw from '@/styles';

const styles = {
  container: (invisible?: boolean) => tw(`
    ${invisible && `invisible`}
    absolute bottom-1.5 right-2.75 z-2
    text-xs text-white text-shadow-lg
    font-bold font-mono
    uppercase

    md:text-right
    md:text-tiny
  `),
};

export default styles;
