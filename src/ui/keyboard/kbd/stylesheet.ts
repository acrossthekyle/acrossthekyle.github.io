import tw from '@/styles';

const styles = tw({
  container: `
    hidden
    items-center justify-center gap-1
    h-5
    px-1
    text-current/75
    bg-(--foreground)/5
    border border-(--foreground)/12.5
    rounded-sm
    select-none
    pointer-events-none

    md:inline-flex
  `,
});

export default styles;
