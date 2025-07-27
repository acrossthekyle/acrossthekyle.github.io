import tw from '@/styles';

const styles = tw({
  figure: `
    relative
  `,
  image: `
    z-1
    object-cover
    opacity-70
  `,
  svg: `
    absolute top-0 left-0 w-full h-full z-1
  `,
  marker: `
    absolute
    w-1 h-1
    rounded-full
    ring-2
  `,
  static: `
    z-1
    bg-yellow-300
  `,
  current: `
    z-2
    bg-yellow-300
  `,
  home: `
    z-1
    left-[15.5%] top-[28.5%]
    bg-blue-400
  `,
});

export default styles;
