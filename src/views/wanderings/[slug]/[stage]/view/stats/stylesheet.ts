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
    w-26
    py-2
    mt-3.5
    border-1
    rounded-full
    font-black
    text-xs text-center
    uppercase
    duration-300

    hover:bg-current/10
  `,
});

export default styles;
