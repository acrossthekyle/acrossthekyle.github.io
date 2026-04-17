import tw from '@/styles';

const styles = tw({
  container: `
    absolute bottom-8 right-2 z-2
    flex flex-col items-end justify-end
    w-43
    leading-[1]
    font-mono
    text-xtiny text-right
    uppercase
  `,
  title: `
    mb-2
    leading-[1]
    text-tiny
    font-mono
  `,
  index: `
    block
    mb-2
    text-xtiny
  `,
  line: `
    block
  `,
  meta: `
    leading-[1.25]
  `,
  data: `
    flex flex-col
    mt-4
    pb-2
  `,
  stats: `
    flex flex-col gap-0.75
  `,
  stat: `
    flex justify-between items-center gap-8
  `,
  navigation: `
    w-43
  `,
  options: `
    grid grid-cols-2 gap-4
    w-full
    mt-2
  `,
  button: `
    mb-0.5
    py-1 px-1.25
    rounded-xs
    uppercase
    bg-(--foreground) text-(--background)

    disabled:opacity-50
    disabled:!cursor-not-allowed
  `,
  previous: `
    text-left
  `,
});

export default styles;
