import tw from '@/styles';

const styles = tw({
  container: `
    relative
    h-[39.5vh]
    overflow-hidden

    md:h-[42.25vh]
    xl:h-[58vh]
  `,
  map: `
    relative
    h-[39.5vh] w-full

    md:h-[42.25vh]
    xl:h-[58vh]
  `,
  current: `
    relative z-0
    stroke-4 stroke-[#fffdf7]
  `,
  marker: `
    relative
    stroke-8 stroke-[#fffdf7]
    fill-[#fffdf7]
  `,
});

export default styles;
