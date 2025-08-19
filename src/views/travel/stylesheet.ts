import tw from '@/styles';

const styles = tw({
  stages: `
    flex flex-col gap-8

    sm:gap-12
  `,
  stage: `
    relative
    cursor-default
    opacity-0
    animate-elastic-in-from-right
  `,
  more: `
    w-full
    py-2
    mt-6
    text-xl text-white/90 text-center
    font-black font-stretch-extra-condensed
    uppercase
    duration-300

    hover:text-yellow-300/90

    sl:mt-12
  `,
});

export default styles;
