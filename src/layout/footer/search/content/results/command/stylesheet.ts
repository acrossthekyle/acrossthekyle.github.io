import tw from '@/styles';

const styles = tw({
  container: `
    flex items-end justify-between
    w-full
    text-left
    border border-(--foreground)/7.5
    rounded-sm
    px-4 py-3
    duration-300

    hover:bg-(--foreground)/7.5
  `,
  group: `
    relative -top-0.75
    flex items-center gap-2
  `,
  subtitle: `
    !capitalize
  `,
});

export default styles;
