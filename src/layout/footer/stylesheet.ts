import tw from '@/styles';

const styles = tw({
  container: `
    fixed bottom-0 left-0 z-9999
    flex items-center justify-between
    w-full
    pb-2 px-6
  `,
  controls: `
    flex items-center gap-4
    p-2 px-4
    mx-6
    rounded-sm
    bg-(--background)
  `,
  button: (isActive: boolean) => tw(`
    flex items-center gap-2
    font-sans font-medium
    text-xs
    capitalize
    duration-300

    hover:opacity-100

    ${isActive ? 'opacity-100' : 'opacity-50'}
  `),
  icon: `
    w-3.5 h-3.5
  `,
});

export default styles;
