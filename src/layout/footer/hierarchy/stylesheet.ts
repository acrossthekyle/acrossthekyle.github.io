import tw from '@/styles';

const styles = tw({
  container: `
    absolute top-0 right-0
  `,
  items: `
    grid grid-cols-2 gap-3
    p-2

    xs:grid-cols-3
    md:p-0
    md:flex
    md:gap-0
    md:has-[li:hover]:[&_a]:text-current/40
    md:has-[li:hover]:[&_button]:text-current/40
    md:has-[li:hover]:[&_span]:text-current/40
  `,
  item: `
    group
  `,
  link: `
    block
    font-mono font-black
    text-xtiny text-current text-left
    uppercase
    duration-300

    md:group-first:pl-3.5
    md:px-3
    md:pt-4
    md:pb-3.75
    md:hover:!text-current/100
  `,
  text: `
    block
    normal-case
    text-xtiny text-current/70
    whitespace-nowrap

    md:group-hover:!text-current/70
  `,
  hierarchy: `
    truncate

    xl:max-w-46
  `,
});

export default styles;
