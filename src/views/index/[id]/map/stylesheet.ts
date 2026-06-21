import tw from '@/styles';

export const styles = tw({
  container: `
    relative z-1
    h-full w-full
  `,
  vertical: `
    absolute top-1/2 left-1/2 z-2
    -translate-x-1/2 -translate-y-1/2
    w-px
    h-6
    bg-(--foreground)/50
  `,
  horizontal: `
    absolute top-1/2 left-1/2 z-2
    -translate-x-1/2 -translate-y-1/2
    w-6
    h-px
    bg-(--foreground)/50
  `,
});


