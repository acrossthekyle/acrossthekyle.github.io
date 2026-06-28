import tw from '@/styles';

export const styles = tw({
  anchor: `
    absolute top-2 left-2 z-100
    flex flex-row items-center gap-4
    p-4
    text-xtiny
    uppercase
    font-mono
    tracking-widest

    md:fixed
  `,
  tucked: `
    !top-0 !left-0
  `,
  icon: `
    stroke-1 stroke-current/75
    w-10 h-10
  `,
});


