import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col
    opacity-0
    animate-in-fade

    dark:text-white light: text-black
  `,
  article: `
    p-6
    border-b-1

    dark:border-b-white/15 light:border-b-black/15

    last:border-b-0

    base:p-8
    hecto:p-12
    mega:p-16
  `,
  description: `
    mt-6
    line-clamp-3

    base:mt-8
  `,
  footer: `
    flex items-end
    mt-4
    uppercase
    text-xs

    base:mt-8
  `,
  link: `
    flex items-center gap-1
    font-bold
    duration-300

    hover:gap-2
  `,
  icon: `
    w-3.25 h-3.25
    stroke-3
  `,
});

export default styles;
