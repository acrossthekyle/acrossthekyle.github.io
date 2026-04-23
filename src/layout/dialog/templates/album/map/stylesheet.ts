import tw from '@/styles';

const styles = tw({
  container: `
    relative z-0
    !w-50
    mt-1.5 ml-8 mr-2

    lg:mt-4
    lg:!w-56
  `,
  marker: `
    absolute z-2
    w-2.5 h-2.5
    stroke-2

    motion-safe:animate-pulse
  `,
});

export default styles;
