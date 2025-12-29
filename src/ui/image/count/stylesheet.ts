import tw from '@/styles';

const styles = tw({
  container: `
    absolute top-4 left-4
    flex items-start justify-center
    py-2 px-3
    text-sm
    font-mono font-bold
    uppercase
    rounded-lg

    dark:bg-black/90 light:bg-white/90
    dark:text-white light:text-black

    base:rounded-sm
  `,
  superscript: `
    mt-3.75

    base:mt-4
  `,
});

export default styles;
