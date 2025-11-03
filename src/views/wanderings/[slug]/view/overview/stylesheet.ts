import tw from '@/styles';

const styles = tw({
  section: `
    flex flex-col
    opacity-0
    animate-elastic-in-from-right
  `,
  heading: `
    mb-1
    font-black

    base:hidden
  `,
  content: `
    mb-4
    text-base
    font-normal
  `,
});

export default styles;
