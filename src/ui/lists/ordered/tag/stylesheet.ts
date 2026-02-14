import tw from '@/styles';

const styles = tw({
  container: `
    absolute right-0 -top-0.5
    inline-flex items-center gap-1
    h-5.25
    px-1.25
    bg-(--foreground)/7.5
    border border-(--foreground)/7.5
    text-tiny text-center
    tracking-wide
    rounded-sm
    duration-300

    md:top-1
  `,
});

export default styles;
