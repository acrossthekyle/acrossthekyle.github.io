import tw from '@/styles';

const styles = tw({
  container: `
    absolute top-0 left-0 right-0 -z-1
    h-[calc(100vh-4.6125rem)]
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
    stroke-4 stroke-yellow-500
  `,
  marker: `
    relative
    stroke-2 stroke-(--foreground)
  `,
});

export default styles;
