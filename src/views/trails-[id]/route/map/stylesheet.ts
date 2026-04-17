import tw from '@/styles';

const styles = tw({
  container: `
    absolute top-0 left-0 right-0 z-0
    h-[calc(100vh-4.75rem)]
    overflow-hidden
    rounded-lg
  `,
  map: `
    relative
    h-full w-full
    overflow-hidden
  `,
  current: `
    relative z-0
    stroke-2 stroke-(--map-current)
  `,
  marker: `
    relative
    stroke-2 stroke-(--foreground)
  `,
  controls: `
    absolute bottom-0 -right-2 z-800
  `,
  zooms: `
    relative z-800
    flex gap-1
    pr-4
  `,
  control: (isActive?: boolean) => tw(`
    mb-1.5
    font-mono font-normal
    text-xtiny
    uppercase
    py-0.5 px-1.25
    rounded-xs
    ${isActive ? 'bg-(--background) text-(--foreground)' : 'bg-(--foreground) text-(--background)'}
    ${!isActive && 'hover:bg-(--foreground)/75'}
  `),
});

export default styles;
