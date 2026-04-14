import tw from '@/styles';

const styles = tw({
  container: `
    absolute top-0 right-2 z-2
    flex flex-col items-end justify-end
    h-[calc(100vh-4.5rem)]
    overflow-y-scroll overflow-hidden
    overscroll-contain
  `,
  spacer: `
    h-0.25
    w-full
  `,
  items: `
    w-80
    h-full
  `,
  item: `
    mb-2

    first:group/first
    first:flex
    first:flex-col
    first:justify-end
    first:h-[calc(100vh-5.5rem)]
    first:border-dashed
    first:border-current/7.5
    first:border-b-1

    last:mb-0
  `,
  card: `
    relative
    w-full
    rounded-md
    pt-2
    border-1 border-dashed border-current/7.5
    border-b-0
    text-(--background)
    bg-(--foreground)/82
  `,
  title: `
    w-36
    px-2
    leading-[0.775]
    text-xl
    font-sans font-black
    uppercase
  `,
  termini: `
    pr-14
    px-2
    mb-5
    leading-[0.8]
    text-base
    font-sans font-black
    uppercase
  `,
  initials: `
    absolute top-2 right-2
    leading-[0.775]
    text-sm text-current/50
    italic
  `,
  helper: `
    absolute -top-4 right-0
    leading-[1]
    font-mono font-normal
    text-xtiny text-right text-(--foreground)/60
    uppercase
  `,
  index: `
    absolute top-2 right-2
    leading-[1]
    font-mono font-normal
    text-xtiny text-right
  `,
  when: `
    block
    text-xtiny
    font-mono font-normal
  `,
  map: `
    relative
    px-2 pb-2
  `,
  stats: `
    flex flex-col gap-0.5
    mt-2
    px-2 pb-2
    leading-[1]
    font-mono
    text-xtiny
    uppercase
  `,
  stat: `
    flex justify-between items-center
  `,
  more: `
    flex items-center justify-center
  `,
  explore: `
    flex justify-between
    w-full
    p-2
    border-t-1 border-t-dashed border-t-current/7.5
    rounded-b-md
    text-center text-xtiny
    font-mono
    uppercase
    duration-300

    hover:bg-(--foreground)/40
  `,
  down: `
    w-3 h-3
  `,
});

export default styles;
