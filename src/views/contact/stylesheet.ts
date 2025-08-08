import tw from '@/styles';

const styles = tw({
  container: `
    group/container
    absolute bottom-12 left-120 z-0
    flex flex-col
  `,
  item: `
    group/item
    overflow-hidden
    opacity-0
    animate-elastic-in
  `,
  link: `
    text-8xl/18 text-white
    font-black
    uppercase
    duration-400

    group-hover/container:text-white/25

    hover:font-thin
    hover:text-white

    after:content-['_↗']
    after:font-thin
  `,
});

export default styles;
