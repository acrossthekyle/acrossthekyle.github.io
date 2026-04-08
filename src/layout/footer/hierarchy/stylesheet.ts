import tw from '@/styles';

const styles = tw({
  items: `
    flex flex-col gap-4

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
    text-xtiny text-current text-right
    uppercase
    duration-300
    pl-3

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
