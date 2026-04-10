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
  `,
  first: `
    grid grid-cols-3
    pt-4
    font-mono font-normal
    uppercase
    text-xtiny
    tracking-wide
  `,
  links: `
    flex flex-col gap-1
    text-left
  `,
  times: `
    flex flex-col gap-1
    text-center
  `,
  settings: `
    flex flex-col gap-1
    text-right
  `,
  button: `
    uppercase
    text-right
  `,
  second: `
    flex flex-col justify-between
    font-mono font-normal
    text-xtiny
    uppercase
  `,
  meta: `
    flex justify-between items-end
    tracking-widest
  `,
  right: `
    text-right
  `,
  navigation: `
    flex flex-col gap-6
  `,
  fixed: `
    fixed bottom-0 left-0 right-0 z-100
    grid grid-cols-3
    px-3.5 py-3
    bg-(--layout-background)
    uppercase
    text-xtiny
    font-mono font-bold
    tracking-wide
  `,
  anchor: `
    leading-[0.775]
    font-sans font-black
    text-xl
    tracking-tighter
  `,
  compiled: `
    flex items-center justify-center
    text-center text-current/80
    leading-[1.1]
  `,
  tagline: `
    flex items-center justify-end
    text-right
    leading-[1.1]
  `,
});

export default styles;
