import tw from '@/styles';

const styles = tw({
  container: `
    h-full
    overflow-y-scroll
    pt-6 !mt-0
  `,
  list: `
    flex flex-col gap-2
    mb-8

    last-of-type:mb-0
  `,
  item: `
    block
    border border-(--foreground)/7.5
    rounded-sm
    px-4 py-3
    duration-300

    hover:bg-(--foreground)/7.5
  `,
});

export default styles;

