import tw from '@/styles';

const styles = tw({
  container: `
    relative
    mt-4 ml-8 mr-2
  `,
  marker: `
    absolute z-2
    w-2.5 h-2.5
    stroke-2

    motion-safe:animate-pulse
  `,
});

export default styles;
