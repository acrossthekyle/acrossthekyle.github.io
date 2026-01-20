import tw from '@/styles';

const styles = tw({
  list: `
    flex flex-col gap-6
    mt-10
  `,
  link: `
    block
    relative

    before:block
    before:absolute
    before:-inset-2
    before:z-0
    before:opacity-0
    before:duration-300
    before:rounded-sm
    dark:before:bg-white/5

    hover:before:opacity-100
  `,
  date: `
    block
    !text-sm text-current/50

    md:!text-xs
  `,
});

export default styles;
