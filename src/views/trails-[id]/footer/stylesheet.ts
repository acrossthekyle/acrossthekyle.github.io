import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col gap-6
    animate-fade-in

    lg:flex-row
    lg:gap-12
  `,
  header: `
    flex-none
    w-full
    mb-2
    font-sans font-black
    text-2xl
    uppercase

    md:w-22
    lg:mb-0
    xl:w-48
  `,
  eyebrow: `
    block
    font-normal
    text-xtiny text-current/50
  `,
  text: `
    block
    w-30
    font-mono font-normal
    text-xtiny text-current/70
  `,
  items: `
    flex flex-col gap-6
    w-full

    lg:flex-row
    lg:gap-0
    md:has-[li:hover]:[&_a]:bg-(--foreground)/0
    md:has-[li:hover]:[&_a]:text-current/40
    md:has-[li:hover]:[&_span]:text-current/40
    md:-mt-2
    md:-mb-2.5
    md:-mx-2.5
  `,
  item: `
    group
    flex-1
    flex flex-col justify-between
    h-full
  `,
  link: `
    flex flex-col justify-between
    text-2xl
    font-black
    uppercase
    rounded-md
    duration-300

    md:p-2
    md:hover:!text-current/100
    md:hover:!bg-(--foreground)/7.5
  `,
  index: `
    block
    font-normal
    text-xtiny text-current/40
    duration-300

    md:group-hover:!text-current/70
  `,
  list: `
    block
    w-36
    mb-4
    font-mono font-normal
    text-xtiny text-current/50
    duration-300

    md:group-hover:!text-current/70
    lg:mb-12
  `,
  footer: `
    font-mono
    text-xtiny text-current/50
    uppercase
    duration-300

    md:group-hover:!text-current/70
  `,
});

export default styles;
