import tw from '@/styles';

const styles = {
  toggle: tw(`
    relative
    flex items-center
    text-xs text-left uppercase
    cursor-pointer
    p-4
    border-b-1 border-b-white/10

    w-full
  `),
  chevron: tw(`
    absolute right-4
    w-4 h-4
  `),
  weight: tw(`
    absolute right-12
  `),
  icon: tw(`
    w-3.5 h-3.5
    me-2
  `),
};

export default styles;
