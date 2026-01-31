import tw from '@/styles';

const styles = tw({
  heading: `
    block
    text-sm
    font-black font-mono

    md:text-xs
  `,
  tagline: `
    block
    mt-1
    text-sm text-current/35
    font-normal font-mono

    md:text-xs
  `,
  list: `
    grid grid-cols-2 gap-4

    md:grid-cols-3
  `,
  link: `
    flex flex-col
    font-bold font-mono
    text-sm
    duration-300

    hover:text-current/50

    md:text-xs
  `,
  hr: `
    w-3
    mt-7 mb-8
    border-(--foreground)/50
  `,
});

export default styles;
