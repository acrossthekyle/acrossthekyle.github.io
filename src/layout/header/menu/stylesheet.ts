import tw from '@/styles';

const styles = tw({
  open: `
    md:hidden
  `,
  icon: `
    w-7 h-7
    stroke-1
  `,
  close: `
    top-6 right-5
  `,
  header: `
    text-lg

    md:text-base
  `,
  section: `
    flex items-end justify-start
    h-full
  `,
  list: `
    flex flex-col gap-2
    capitalize
    text-xl
  `,
  theme: `
    fixed right-6 bottom-6
  `,
});

export default styles;
