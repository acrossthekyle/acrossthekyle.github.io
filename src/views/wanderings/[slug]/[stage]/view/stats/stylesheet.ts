import tw from '@/styles';

const styles = tw({
  list: `
    grid grid-cols-2 gap-4
  `,
  item: `
    flex flex-col gap-0
  `,
  heading: `
    capitalize
    font-black
  `,
  view: `
    mt-5.5
    uppercase
    text-tiny text-center
    font-bold
    py-0.5
    w-18
    border-1
    rounded-full
    duration-300

    hover:bg-current/10

    base:w-21
    base:text-xs
    base:py-1
  `,
});

export default styles;
