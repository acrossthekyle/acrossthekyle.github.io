import tw from '@/styles';

const styles = tw({
  container: `
    flex gap-4
    w-full
  `,
  sidebar: `
    mt-1
    bg-(--foreground)
    text-(--background)
    rounded-md
  `,
  stages: `
    flex-2
    flex flex-col gap-1
    p-2.5
    h-[72vh]
    overflow-y-scroll
  `,
  stage: `
    font-mono
    uppercase
  `,
  plot: `
    relative
    flex-1
    mt-1
    h-[72vh]
    w-full
    rounded-md
    border border-(--foreground)/20
    overflow-hidden
  `,
});

export default styles;
