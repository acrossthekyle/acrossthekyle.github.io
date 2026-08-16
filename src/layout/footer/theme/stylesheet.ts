import tw from '@/styles';

export const styles = tw({
  container: `
    absolute bottom-16 right-1 z-100
    p-4
    flex items-center
    text-(--foreground)
    font-thin font-mono
    text-xtiny
    uppercase
    tracking-widest

    sm:fixed
    sm:top-0
    sm:bottom-auto
    md:top-1
  `,
  circle: `
    w-4 h-4
    rounded-full
    border light:border-(--background)/40
    bg-(--foreground)
  `,
});


