import tw from '@/styles';

const styles = tw({
  container: `
    fixed top-0 left-0 z-9999
    flex items-center justify-between
    w-full
    pt-2 px-6
  `,
  anchor: `
    flex items-center gap-2
    p-2 px-4
    ml-6
    rounded-sm
    bg-(--background)
    font-sans font-medium
    text-sm
    capitalize
  `,
  controls: `
    flex items-center gap-4
    p-2 px-4
    mr-6
    rounded-sm
    bg-(--background)
  `,
  button: (isActive: boolean) => tw(`
    flex items-center gap-2
    font-sans font-medium
    text-sm
    capitalize
    duration-300

    hover:opacity-100

    ${isActive ? 'opacity-100' : 'opacity-50'}
  `),
  icon: `
    w-3.5 h-3.5
  `,
  rotate: `
    -rotate-90
  `,
});

export default styles;
