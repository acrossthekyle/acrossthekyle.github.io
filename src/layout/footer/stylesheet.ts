import tw from '@/styles';

const styles = tw({
  container: `
    relative z-99
    h-[calc(100vh-2rem)] w-full
  `,
  inner: `
    flex flex-col justify-between
    h-[calc(100vh-4.5rem)]
    mx-3.5
    border-b-1 border-b-(--background)/20 border-dashed
  `,
  first: `
    flex items-start justify-between
    pt-4
    font-mono font-bold
    uppercase
    text-xtiny text-current/50
    tracking-wide
  `,
  settings: `
    flex flex-col gap-0
  `,
  button: `
    uppercase
    text-right
  `,
  second: `
    flex flex-col justify-between
    font-bold font-mono
    text-xtiny text-current/50
    uppercase
  `,
  meta: `
    flex justify-between
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
    flex items-center justify-between
    h-10
    px-3.5
    bg-(--foreground)
    uppercase
    text-xtiny
    font-mono font-bold
    leading-[1]
    tracking-wide
  `,
  anchor: `
    leading-[0.775]
    font-sans font-black
    text-xl
    tracking-tighter
  `,
  compiled: `
    text-current/50
  `,
  highlight: `
    text-(--background)
  `,
});

export default styles;
