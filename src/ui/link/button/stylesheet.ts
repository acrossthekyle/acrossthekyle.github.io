import tw from '@/styles';

const styles = tw({
  container: `
    block
    py-0.5
    uppercase
    text-tiny text-center
    tracking-wide
    rounded-sm
    bg-(--foreground)/7.5
    border border-(--foreground)/7.5
    duration-300

    hover:bg-(--foreground)/12.5
  `,
});

export default styles;
