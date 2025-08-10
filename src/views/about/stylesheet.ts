import tw from '@/styles';

const styles = tw({
  container: `
    group/container
    relative z-0
    flex flex-col
    py-6 pl-6
    overflow-y-scroll

    ml:absolute
    ml:top-0
    ml:bottom-0
    ml:left-0
    ml:pl-80
    sl:py-12
    sl:pl-120
  `,
  header: `
    w-full
    mb-4 pr-6
    animate-elastic-in

    ml:mb-8
    ml:pr-20
    ml:max-w-4xl
  `,
  title: `
    mb-4
    text-5xl/10
    font-black
    uppercase

    2xs:text-6xl/12
    ml:mb-8
    ml:text-8xl/19
    sl:text-9xl/24
  `,
  status: `
    w-full
    pr-6
    text-xl
    uppercase

    ml:mb-4
  `,
  body: `
    w-full
    pr-6 mb-4
    text-base
    uppercase
    animate-elastic-in

    ml:text-lg
    ml:pr-20
    ml:max-2-2xl
  `,
});

export default styles;
