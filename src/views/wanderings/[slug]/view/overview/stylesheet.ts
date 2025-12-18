import tw from '@/styles';

const styles = tw({
  section: `
    flex flex-col
    mb-4
    opacity-0
    animate-elastic-in-from-right

    base:mt-6
    base:mb-0
  `,
  content: `
    mb-4
    text-base
    font-normal

    last-of-type:mb-0
  `,
});

export default styles;
