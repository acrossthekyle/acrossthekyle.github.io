import tw from '@/styles';

const styles = tw({
  container: `
    group/container
    absolute bottom-6 left-6 z-0
    flex flex-col

    md:left-60
    ml:left-74
    sl:bottom-12
    sl:left-120
  `,
  item: `
    group/item
    overflow-hidden
    opacity-0
    animate-elastic-in
  `,
  link: `
    text-2xl/0 text-white
    font-black
    uppercase
    duration-400

    group-hover/container:text-white/25

    hover:font-thin
    hover:text-white

    after:content-['_↗']
    after:font-thin

    5xs:text-4xl/6
    sm:text-6xl/11
    ml:text-7xl/13
    sl:text-8xl/18
  `,
});

export default styles;
