import tw from '@/styles';

const styles = tw({
  stages: `
    flex flex-col gap-0
    mt-6

    deci:gap-4
    deka:mt-12
  `,
  stage: `
    relative
    cursor-default
    opacity-0
    animate-elastic-in-from-right
  `,
});

export default styles;
