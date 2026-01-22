import tw from '@/styles';

const styles = tw({
  section: `
    flex flex-col gap-4
    mb-6

    md:border-b-1
    md:border-b-(--foreground)/10
    md:mb-8
    md:pb-12

    last-of-type:mb-0
    last-of-type:pb-0
    last-of-type:border-b-0
  `,
});

export default styles;
