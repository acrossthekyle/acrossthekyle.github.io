import tw from '@/styles';

const styles = tw({
  section: `
    flex flex-col justify-start
    py-4

    first:pt-0
    last:pb-0
    last:justify-end
  `,
  heading: `
    flex flex-row justify-between
    mb-2
    text-xs
    font-black
    uppercase
  `,
  index: `
    text-tiny
    font-light
    tracking-[0.125rem]

    md:text-xtiny
  `,
  paragraph: `
    w-full max-w-72
    mb-4
    text-sm

    md:text-xs

    last:mb-0
  `,
  link: `
    underline underline-offset-2 decoration-dotted
  `,
});

export default styles;
