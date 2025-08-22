import tw from '@/styles';

const styles = tw({
  section: `
    mt-6

    ml:mt-0
  `,
  stages: `
    flex flex-col gap-0
    mt-6

    sm:gap-4
    ml:mt-12
  `,
  stage: `
    relative
    cursor-default
    opacity-0
    animate-elastic-in-from-right
  `,
  more: `
    flex flex-col items-center
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
  pulse: `
    relative
    h-100
    w-full
    bg-neutral-900
    animate-pulse
  `,
});

export default styles;
