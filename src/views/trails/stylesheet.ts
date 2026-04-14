import tw from '@/styles';

const styles = tw({
  header: `
    grid grid-cols-2 gap-0
    w-full
    font-mono
    text-xtiny
    uppercase
  `,
  section: `
    relative z-2
    mt-16
    font-mono
    uppercase

    first-of-type:mt-10
  `,
  arrow: `
    w-2.25 h-2.25
  `,
  start: `
    flex items-start
  `,
  heading: `
    sticky top-10
    self-start
    flex gap-153
    leading-[1]
    text-xs
  `,
  index: `
    text-xtiny text-current/80
    font-normal
  `,
  label: `
    block
    w-34
  `,
  subheading: `
    flex items-center gap-1
    text-xtiny
    font-normal
  `,
  items: `
    flex flex-col gap-4
    ml-57 -mt-3
  `,
  item: `
    flex gap-8
  `,
  link: `
    relative z-3
    w-80
    text-xs
    rounded-xs

    md:-m-2
    md:p-2
    md:duration-300
    md:hover:bg-(--foreground)/2.5
  `,
  title: `
    flex items-center gap-1
  `,
  stats: `
    flex flex-col gap-0.5
    mt-1
    font-normal
    text-xtiny text-current/80
  `,
});

export default styles;
