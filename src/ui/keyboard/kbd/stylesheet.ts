import tw from '@/styles';

const styles = {
  container: (isSymbol?: boolean) => tw(`
    inline-flex items-center justify-center
    h-5 w-fit min-w-5
    px-1
    ${isSymbol ? 'text-base' : 'text-tiny'} text-current/75
    bg-(--foreground)/5
    border border-(--foreground)/20
    rounded-sm
    select-none
    pointer-events-none
  `),
};

export default styles;
