import tw from '@/styles';

const styles = tw({
  container: `
    !py-0
  `,
  header: `
    flex flex-col justify-between gap-4
    h-[calc(100vh-4.6125rem)]
    pt-2 pb-1.5
  `,
  aside: `
    flex flex-col gap-0
    font-mono font-normal
    text-xtiny
    uppercase
  `,
});

export default styles;
