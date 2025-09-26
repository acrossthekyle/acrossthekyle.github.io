import tw from '@/styles';

const styles = tw({
  backdrop: `
    fixed inset-0 z-5
    backdrop-blur-md
    bg-black/80
  `,
  container: `
    fixed inset-0 z-6
    flex
    w-full h-full
    bg-transparent
    text-white/90
  `,
  close: `
    block
    fixed top-12 right-12 z-1
    opacity-0
    animate-in-fade-delayed
  `,
  x: `
    stroke-1 stroke-white/90
  `,
  article: `
    relative
    flex-none
    flex flex-col items-center gap-8
    w-full
    opacity-0
    !animate-in-fade-delayed
  `,
  header: `
    w-full max-w-lg
  `,
  heading: `
    text-2xl text-left
    font-black font-stretch-semi-condensed
    uppercase
  `,
  lid: `
    block
    text-xs
    tracking-wider
    font-semibold font-stretch-normal
  `,
  content: `
    w-full max-w-lg
  `,
  paragraph: `
    pb-4
    text-base text-justify
    font-normal

    last:pb-0
  `,
});

export default styles;
