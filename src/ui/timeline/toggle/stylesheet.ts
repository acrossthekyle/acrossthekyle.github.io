import tw from '@/styles';

const styles = tw({
  cta: `
    group
    relative
    flex items-center justify-center
    w-8 h-8
    -ml-3 mt-1
    duration-300

    hover:scale-115

    md:ml-9
  `,
  dot: `
    animate-pulse
    absolute left-1.5 top-1.5 z-0
    w-5 h-5
    rounded-full
    bg-(--foreground)/25

    group-hover:animate-none
  `,
  icon: `
    animate-pulse
    w-3 h-3

    group-hover:animate-none
  `,
});

export default styles;
