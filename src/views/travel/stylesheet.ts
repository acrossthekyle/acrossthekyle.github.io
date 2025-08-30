import tw from '@/styles';

const styles = tw({
  stages: `
    flex flex-col gap-6
    mt-6

    deci:gap-12
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
