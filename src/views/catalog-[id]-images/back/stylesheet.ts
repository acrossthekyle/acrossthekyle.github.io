import tw from '@/styles';

const styles = tw({
  container: `
    absolute top-0 right-0.5 -left-0.5 z-100
    grid justify-items-center gap-1.5
    w-16 h-16
    p-3

    sm:right-0.5
    sm:left-auto
  `,
  top: `
    h-px w-8
    bg-(--foreground)
    translate-y-4.5 rotate-45
  `,
  bottom: `
    h-px w-8
    bg-(--foreground)
    -translate-y-1.25 -rotate-45
  `,
});

export default styles;
