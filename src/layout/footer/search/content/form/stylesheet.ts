import tw from '@/styles';

const styles = tw({
  container: `
    relative
  `,
  label: `
    absolute left-3.25 top-3
  `,
  icon: `
    w-3.5 h-3.5
    stroke-current/50
  `,
  input: `
    w-full
    p-2 pl-10
    border border-(--foreground)/7.5
    bg-(--foreground)/2.5
    rounded-sm
  `,
});

export default styles;
