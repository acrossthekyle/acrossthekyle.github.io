import tw from '@/styles';

export const styles = tw({
  scroll: `
    fixed bottom-4 left-4
    w-px
    h-12
    bg-(--foreground)/50
  `,
  wheel: `
    absolute bottom-2 left-1/2
    -translate-x-1/2
    w-2
    h-4
    bg-(--background)
    border
    rounded-full
  `,
});


