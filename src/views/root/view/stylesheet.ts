import tw from '@/styles';

const styles = tw({
  header: `
    p-6

    base:p-8
    hecto:p-12
    kilo:p-16
  `,
  title: `
    font-bold
    text-lg/5
    mb-1 mr-10
  `,
  tagline: `
    text-sm
  `,
  main: `
    absolute left-0 bottom-0 z-2
    w-full max-w-lg
    p-6

    base:p-8
    hecto:p-12
    kilo:p-16
  `,
  paragraph: `
    mb-4
  `,
  emphasis: `
    font-serif
    italic
  `,
  link: `
    inline-block
    py-1 px-3
    mt-2 mr-6
    border-1
    rounded-3xl
    text-xs
    uppercase
    font-medium
    bg-transparent
    duration-300

    dark:border-white light:border-black

    last:mr-0

    hover:dark:bg-white/15
    hover:light:bg-black/15
  `,
  footer: `
    invisible
    absolute right-0 bottom-0 z-1
    p-6
    text-sm

    base:visible
    base:p-8
    hecto:p-12
    kilo:p-16
  `,
});

export default styles;
