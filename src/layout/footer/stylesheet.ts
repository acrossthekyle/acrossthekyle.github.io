import tw from '@/styles';

const styles = tw({
  container: `
    relative z-99
    h-[calc(100vh-1.75rem)] w-full
  `,
  inner: `
    flex flex-col justify-between
    h-[calc(100vh-4.5rem)]
    mx-3.5
    pt-2 pb-6
    border-b-1 border-b-current/22.5 border-dashed
  `,
  upper: `
    grid grid-cols-3
  `,
  settings: `
    flex items-start justify-end gap-4
    font-mono
    text-xtiny
    uppercase
  `,
  button: `
    uppercase
    text-left
  `,
  copyright: `
    font-mono
    text-xtiny
    uppercase
  `,
  center: `
    text-center
  `,

  grid: `
    grid grid-cols-4
  `,
});

export default styles;
