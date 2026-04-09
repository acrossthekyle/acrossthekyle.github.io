import tw from '@/styles';

const styles = tw({
  container: (isToggled: boolean) => tw(`
    absolute
    mt-1
    duration-300
    w-full

    ${isToggled ? 'translate-x-0' : '-translate-x-[100vw]'}

    sm:pr-8
    sm:w-auto
    sm:relative
    sm:translate-x-0
  `),
  items: `
    flex flex-col gap-6
    overflow-y-scroll

    sm:flex-2
  `,
  item: `
    font-mono
    uppercase
  `,
});

export default styles;
