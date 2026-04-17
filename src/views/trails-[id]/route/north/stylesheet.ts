import tw from '@/styles';

const styles = tw({
  container: `
    absolute top-6 right-6 z-2
    flex flex-col items-center gap-0
    pointer-events-none
  `,
  icon: `
    w-2 h-2
    stroke-0
    fill-red-700
    opacity-50
  `,
  letter: `
    leading-[1]
    font-sans font-bold
    text-tiny text-current/12.5
    uppercase
  `,
});

export default styles;
