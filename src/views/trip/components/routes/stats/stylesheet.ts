import tw from '@/styles';

const styles = {
  stats: tw(`
    absolute bottom-3 right-3
    flex flex-col items-end gap-4
    text-xs text-right font-bold uppercase

    sm:bottom-6
    sm:right-6
  `),
  label: tw(`
    block
    text-tiny font-normal
  `),
};

export default styles;
