import tw from '@/styles';

const styles = tw({
  container: `
    absolute inset-0 z-9999
    w-full h-full
    bg-white dark:bg-black
    text-current/90
    overflow-y-scroll
    overscroll-contain
    outline-0
    opacity-0
    animate-in-fade
  `,
});

export default styles;
