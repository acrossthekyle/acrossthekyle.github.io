import tw from '@/styles';

const styles = tw({
  footer: `
    flex justify-start
    mt-8 mb-4

    base:hidden
  `,
  up: `
    uppercase
    text-tiny text-center
    font-bold
    py-0.5
    w-23
    border-1
    rounded-full
    duration-300

    hover:bg-current/10

    base:w-26
    base:text-xs
    base:py-1
  `,
});

export default styles;
