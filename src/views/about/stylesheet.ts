import tw from '@/styles';

const styles = tw({
  container: `
    group/container
    absolute top-0 bottom-0 left-0 z-0
    flex flex-col justify-between
    pt-12 pb-8 ps-120
    overflow-y-scroll
  `,
  header: `
    w-full max-w-4xl
    mb-8
    animate-elastic-in
  `,
  title: `
    mb-8
    text-9xl/24
    font-black
    uppercase
  `,
  status: `
    w-full max-w-4xl
    pe-20 mb-4
    text-2xl
    uppercase
  `,
  body: `
    w-full max-w-4xl
    pe-20 mb-4
    text-lg
    uppercase
    animate-elastic-in
  `,
});

export default styles;
