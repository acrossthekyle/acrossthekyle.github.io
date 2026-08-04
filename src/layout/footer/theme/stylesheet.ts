import tw from '@/styles';

export const styles = tw({
  container: `
    fixed bottom-0 right-2 z-100
    p-4
    flex items-center
    text-(--foreground)
    font-thin font-mono
    text-xtiny
    uppercase
    tracking-widest

    md:bottom-2
  `,
  circle: `
    w-5 h-5
    rounded-full
    border light:border-(--background)/40
    bg-(--foreground)/75
  `,
});


