import tw from '@/styles';

const styles = tw({
  text: `
    text-9xl text-white/90
    mb-26
    animate-elastic-in-from-right
  `,
  emphasis: `
    font-serif font-semibold lowercase italic text-yellow-300
  `,
  resume: `
    text-9xl text-white/90

    after:content-['_↗']
    after:text-yellow-300
  `,
});

export default styles;
