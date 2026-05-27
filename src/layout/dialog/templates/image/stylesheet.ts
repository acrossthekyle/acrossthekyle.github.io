import tw from '@/styles';

const styles = tw({
  container: `
    absolute left-1/2 top-1/2
    -translate-x-1/2 -translate-y-1/2
    w-screen
    flex justify-center
  `,
  figure: `
    relative
    aspect-video
    w-auto min-w-[calc(100vw-18rem)]
  `,
  image: `
    relative z-1
    rounded-sm
  `,
  caption: `
    absolute -top-6 -bottom-6 left-0 right-0 z-2
    grid grid-cols-2 grid-rows-2
    text-tiny
    font-normal
    uppercase
    tracking-widest

    md:text-xtiny
  `,
  when: `
    justify-self-start self-start
  `,
  index: `
    justify-self-end self-start
  `,
  location: `
    justify-self-start self-end
  `,
  elevation: `
    justify-self-end self-end
  `,
});

export default styles;
