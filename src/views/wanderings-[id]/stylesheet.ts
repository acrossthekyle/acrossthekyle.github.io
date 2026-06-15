import tw from '@/styles';

export const styles = tw({
  container: `
    fixed inset-x-4 top-4 bottom-4 z-2
  `,
  heading: `
    absolute bottom-1/2 left-0
    translate-y-1/2
    flex flex-col
    text-[min(10vw,114px)]
    font-black
    uppercase
    whitespace-nowrap
    scale-x-[0.5] origin-left
    leading-[0.8]
  `,
  index: `
    absolute top-0 right-0
    leading-[0.85]
    font-bold font-mono
    tracking-widest
    uppercase
    text-tiny
    italic
  `,
  coordinates: `
    absolute top-1/2 left-1/2
    -translate-y-1/2 -translate-x-1/2
    mt-10
    font-mono
    leading-[0.85]
    tracking-widest
    uppercase
    text-tiny text-current/50
  `,
  when: `
    absolute bottom-0 right-0
    flex items-center gap-4
    leading-[0.85]
    text-sm
    font-serif
    tracking-tighter
    italic
  `,
  timeline: `
    block
    h-px w-[12svw]
    bg-(--foreground)/50
  `,
  location: `
    absolute top-1/2 right-0 -translate-y-1/2
    flex flex-col gap-1
    leading-[1]
    text-tiny text-right
    uppercase
    tracking-widest
  `,
  paragraph: `
    absolute bottom-0 left-0
    flex flex-col gap-4
    max-w-72
    text-xs
  `,
  first: `
    font-serif
    italic
  `,
  remaining: ``,
  emphasis: `
    font-serif
    italic
  `,
});
