import tw from '@/styles';

const styles = tw({
  container: (isToggled: boolean) => tw(`
    absolute
    mt-1
    rounded-md
    bg-(--foreground)
    text-(--background)
    duration-300
    w-full

    ${isToggled ? 'translate-x-0' : '-translate-x-[100vw]'}

    sm:w-auto
    sm:relative
    sm:translate-x-0
  `),
  items: `
    flex flex-col gap-1
    h-[83vh]
    p-1
    overflow-y-scroll

    xs:h-[72vh]
    sm:flex-2
    md:p-2.5
  `,
  item: `
    font-mono
    uppercase
  `,
});

export default styles;
