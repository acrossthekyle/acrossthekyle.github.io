import tw from '@/styles';

const styles = tw({
  count: `
    absolute top-4 left-4
    flex items-start justify-center
    py-2 px-3
    text-sm
    font-mono font-bold
    uppercase

    before:content-['_#']
    before:text-xs
    before:mt-0.25
    before:pr-0.25

    dark:bg-black/90 light:bg-white/90
    dark:text-white light:text-black
  `,
});

export default styles;
