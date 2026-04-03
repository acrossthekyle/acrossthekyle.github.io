import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col gap-4
    w-full

    lg:flex-row
  `,
  sidebar: `
    absolute left-1 bottom-66.75 right-1 z-9999
    bg-(--background)
    text-(--foreground)

    sm:bottom-55.75
    lg:rounded-md
    lg:bg-(--foreground)
    lg:text-(--background)
    lg:relative
    lg:left-auto
    lg:right-auto
    lg:bottom-auto
    lg:mt-1
  `,
  stages: `
    flex flex-col gap-1
    h-[12vh]
    overflow-hidden

    lg:flex-2
    lg:p-2.5
    lg:h-[72vh]
    lg:overflow-y-scroll
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
