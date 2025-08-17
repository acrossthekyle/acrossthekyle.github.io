import tw from '@/styles';

const styles = tw({
  group: `
    flex flex-col gap-6
  `,
  text: `
    text-2xl text-white/90
    font-medium
    animate-elastic-up

    xl:text-3xl
    2xl:text-4xl
  `,
  emphasis: `
    font-light
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
