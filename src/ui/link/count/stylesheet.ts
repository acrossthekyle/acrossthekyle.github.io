import tw from '@/styles';

const styles = tw({
  container: `
    flex items-center gap-1
    absolute right-0 top-1
    px-1.25
    text-xs text-current/75
    capitalize
    font-bold
    border border-(--foreground)/15
    bg-(--foreground)/7.5
    rounded-sm

    md:text-tiny
    md:py-0.25
  `,
});

export default styles;
