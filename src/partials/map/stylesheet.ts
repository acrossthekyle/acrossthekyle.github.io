import tw from '@/styles';

const styles = tw({
  caption: `
    absolute bottom-4 right-4 z-2
    flex flex-col gap-0.5
    leading-[1]
    font-normal
    text-xtiny text-right text-current/70
    uppercase
    tracking-widest
  `,
  plugin: `
    relative z-1
    h-full w-full
  `,
  tooltip: `
    relative top-1
    uppercase
    text-xtiny

    motion-safe:opacity-0
    motion-safe:animate-fade-in
  `,
  marker: (isActive: boolean) => tw(`
    relative !z-1
    stroke-1 stroke-(--foreground)/10
    ${isActive ? 'fill-(--foreground)/50 animate-pulse' : 'fill-(--foreground)/4 motion-safe:hover:fill-(--foreground)'}
  `),
  marker1: `
    relative !z-2
    stroke-1 stroke-(--foreground)/10
    fill-(--background)
    !pointer-events-none
  `,
  marker2: `
    relative !z-3
    stroke-1 stroke-(--foreground)/10
    fill-(--foreground)
    !pointer-events-none
  `,
  marker3: `
    relative !z-4
    stroke-4 stroke-(--background)
    fill-(--background)
    !pointer-events-none
  `,
});

export default styles;
