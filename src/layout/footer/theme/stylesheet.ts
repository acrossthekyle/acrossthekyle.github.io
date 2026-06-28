import tw from '@/styles';

export const styles = tw({
  container: `
    fixed bottom-2 right-2 z-100
    p-4
    flex items-center
    text-(--foreground)
    font-thin font-mono
    text-xtiny
    uppercase
    tracking-widest
  `,
  circle: `
    w-5 h-5
    rounded-full
    border
    bg-(--foreground)/75
  `,
});


