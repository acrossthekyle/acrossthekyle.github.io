import tw from '@/styles';

const styles = tw({
  container: `
    absolute top-2 left-2
    flex items-start justify-center
    py-1.5 px-2
    text-xs
    font-mono font-bold
    uppercase
    rounded-sm
    shadow-md

    dark:bg-white/90 light:bg-black/90
    dark:text-black light:text-white

    base:top-4
    base:left-4
  `,
  superscript: `
    mt-2.75
  `,
});

export default styles;
