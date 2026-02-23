import tw from '@/styles';

const styles = tw({
  header: `
    md:max-w-2xl
    lg:max-w-3xl
    xl:max-w-5xl
  `,
  cta: `
    relative
    h-full w-full

    after:absolute
    after:inset-0
    after:bg-black
    after:opacity-0
    after:duration-500

    hover:after:opacity-25
  `,
  figure: `
    relative
    !pt-0

    md:-mx-20
    lg:-mx-32
    xl:-mx-64
  `,
  emphasis: `
    font-serif italic lowercase
  `,
});

export default styles;
