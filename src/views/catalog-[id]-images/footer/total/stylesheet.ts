import tw from '@/styles';

const styles = tw({
  container: `
    flex items-center
    leading-[0.85]
    font-bold
    uppercase
    text-tiny
  `,
  highlight: `
    dark:text-yellow-300
    light:text-yellow-500
  `,
});

export default styles;
