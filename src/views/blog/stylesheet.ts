import tw from '@/styles';

const styles = tw({
  description: `
    mt-10
    leading-[1]
    text-tiny text-current/50
    font-mono
    uppercase
  `,
  highlight: `
    text-(--foreground)
  `,
  items: `
    group
    grid grid-cols-1 gap-x-12

    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
  `,
  item: `
    relative
    flex flex-col gap-4
    mt-10
    rounded-sm
    text-tiny
    font-mono
    uppercase
    duration-300

    md:group-hover:text-current/50
    md:hover:!text-current/100
  `,
  heading: `
    flex flex-col gap-1
    font-bold
    text-xs
    whitespace-nowrap
  `,
  eyebrow: `
    block
    font-normal
    text-xtiny text-current/50

    lg:inline-block
    lg:mr-3
  `,
  lid: `
    block
    mb-4
    font-normal
    text-xtiny text-current/50
  `,
});

export default styles;
