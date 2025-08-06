import tw from '@/styles';

const styles = tw({
  container: `
    absolute right-0 top-0 bottom-0
    w-[calc(100%-38rem)]
    py-14 px-20
    ps-36
    overflow-y-scroll
  `,
  header: `
    mb-16
    uppercase
    text-base text-white
  `,
  description: `
    text-justify
  `,
  footer: `
    mt-16
    text-sm text-right
    font-mono
    uppercase
  `,
});

export default styles;
