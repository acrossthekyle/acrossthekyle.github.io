import tw from '@/styles';

const styles = tw({
  container: `
    relative
    h-[46vh]
    overflow-hidden
  `,
  map: `
    relative
    h-[46vh] w-full
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
