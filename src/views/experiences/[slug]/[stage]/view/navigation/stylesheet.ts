import tw from '@/styles';

const styles = tw({
  nav: `
    absolute top-22 right-0
    flex items-center gap-4
    text-tiny

    md:top-26.25
  `,
  item: `
    flex items-center gap-1
    uppercase
    text-current/50
    font-bold
    duration-300

    hover:text-current/100
  `,
  icon: `
    w-3 h-3
    stroke-4

    md:stroke-3
  `,
});

export default styles;
