import tw from '@/styles';

const styles = tw({
  container: `
    relative
    h-[39.5vh]
    overflow-hidden

    md:h-[42.25vh]
    xl:h-[46vh]
  `,
  map: `
    relative
    h-[39.5vh] w-full

    md:h-[42.25vh]
    xl:h-[46vh]
  `,
  current: `
    relative z-0
    stroke-4 stroke-[#0c0c0c]
  `,
  marker: `
    relative
    stroke-8 stroke-[#0c0c0c]
    fill-[#0c0c0c]
  `,
});

export default styles;
