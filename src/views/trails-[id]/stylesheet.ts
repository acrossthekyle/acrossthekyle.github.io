import tw from '@/styles';

const styles = tw({
  container: `
    !py-0
  `,
  header: `
    absolute top-0 left-2 z-3
    pt-2 pb-1.5
  `,
  aside: `
    absolute bottom-1.5 left-2 z-3
    flex flex-col gap-0.5
    leading-[1]
    font-mono font-normal
    text-xtiny
    uppercase
  `,
});

export default styles;
