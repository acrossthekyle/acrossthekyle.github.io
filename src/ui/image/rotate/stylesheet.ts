import tw from '@/styles';

const styles = tw({
  container: `
    absolute inset-0 z-5
    flex flex-col items-center justify-center
    backdrop-blur-sm
    p-4

    landscape:hidden
  `,
  message: `
    text-center
  `,
  dismiss: `
    mt-2
    font-black
    uppercase
  `,
});

export default styles;
