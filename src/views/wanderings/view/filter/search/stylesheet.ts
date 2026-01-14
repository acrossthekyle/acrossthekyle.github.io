import tw from '@/styles';

const styles = tw({
  container: `
    relative
    block
  `,
  search: `
    flex items-center gap-2
    h-12 w-full
    border
    rounded-sm

    dark:bg-black light:bg-white
    dark:border-white/15 light:border-black/15
  `,
  icon: `
    absolute top-3 left-3
    stroke-2 stroke-current/50
  `,
  input: `
    w-full h-full
    pl-12
    text-white text-sm
    placeholder-gray-500
  `,
});

export default styles;
