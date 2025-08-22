import tw from '@/styles';

const styles = tw({
  title: `
    mt-6

    md:hidden
  `,
  group: `
    flex flex-col gap-3
  `,
  heading: `
    mt-6
    pb-1
    text-xl text-white/90
    font-black font-stretch-semi-condensed
    uppercase
    animate-elastic-in-from-right

    md:first-of-type:mt-0
  `,
  index: `
    ms-2
    text-tiny text-yellow-300/90
    font-light
  `,
  text: `
    text-lg text-white/90 text-justify
    font-medium
    animate-elastic-in-from-right

    2xl:text-2xl
  `,
  anchor: `
    text-yellow-300
    duration-300

    after:font-light
    after:text-yellow-300
    after:duration-300

    hover:text-white/40
    hover:after:text-white/40

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
