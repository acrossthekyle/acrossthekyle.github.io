import tw from '@/styles';

const styles = tw({
  footer: `
    flex justify-center
    my-4
  `,
  up: `
    uppercase
    text-xs text-center
    font-bold
    py-0.75
    w-26
    border-1
    rounded-full
    duration-300

    hover:bg-current/10

    base:py-1
  `,
});

export default styles;
