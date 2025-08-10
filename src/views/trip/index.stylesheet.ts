import tw from '@/styles';

const styles = tw({
  container: `
    relative z-1
    scroll-smooth
    w-full
    py-6 pr-6 pl-6 pt-6

    ml:opacity-0
    ml:animate-elastic-in
    ml:absolute
    ml:right-0
    ml:top-0
    ml:bottom-0
    ml:pl-0
    ml:w-[calc(100%-20rem)]
    ml:overflow-y-scroll
    ml:w-[calc(100%-32.5rem)]
    sl:pr-20
    sl:py-12
    sl:w-[calc(100%-38rem)]
    sx:pl-36
  `,
  title: `
    mb-8
    text-5xl/10
    font-black uppercase
    animate-slide-down

    xs:text-6xl/12
    ml:hidden
  `,
  heading: `
    relative
    mb-8
    text-base
    uppercase
    animate-slide-down

    ml:mr-24
    sl:mb-12
  `,
  block: `
    block
  `,
  gear: `
    absolute -top-6 right-6
    text-base text-white
    font-black
    uppercase
    duration-300
    animate-slide-in

    hover:font-light

    ml:top-6
    sl:top-12
    sl:right-20
  `,
});

export default styles;
