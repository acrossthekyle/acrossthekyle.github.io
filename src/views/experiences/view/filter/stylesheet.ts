import tw from '@/styles';

const styles = tw({
  container: `
    py-0.75 px-2
    rounded-sm
    font-bold
    uppercase
    text-sm
    duration-300

    dark:bg-white/15 light:bg-black/10
    dark:text-white/80 light:text-black/60

    hover:dark:bg-white/30
    hover:light:bg-black/20

    md:text-xs
  `,
});

export default styles;
