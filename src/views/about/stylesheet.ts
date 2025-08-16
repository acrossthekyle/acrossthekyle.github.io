import tw from '@/styles';

const styles = tw({
  group: `
    flex flex-col gap-4
    mb-4

    last:mb-0

    ml:gap-10
    ml:mb-10
    lg:mb-12
    lg:gap-12
    2xl:mb-26
    2xl:gap-26
  `,
  text: `
    text-2xl text-white/90
    font-bold
    animate-elastic-up
    uppercase

    xs:text-3xl
    sm:text-4xl
    ml:text-5xl
    lg:text-6xl
    sl:text-7xl
    2xl:text-8xl
  `,
  highlight: `

  `,
  emphasis: `
    font-light
  `,
  anchor: `
    text-cyan-400
    duration-300

    after:font-light
    after:text-cyan-400
    after:duration-300

    hover:text-cyan-700
    hover:after:text-cyan-700

    outline-0

    focus:ring-1
  `,
  internal: `
    after:content-['_→']
  `,
  external: `
    after:content-['_↗']
  `,
});

export default styles;
