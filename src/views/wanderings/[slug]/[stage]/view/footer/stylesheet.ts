import tw from '@/styles';

const styles = tw({
  footer: `
    flex flex-row justify-between gap-16
    pt-6
  `,
  half: `
    w-1/2
    text-right

    first:text-left
  `,
  link: `
    inline-block
  `,
  title: `
    text-2xl/5
    font-black font-stretch-semi-condensed
    uppercase
    duration-200

    hover:font-light
  `,
  eyebrow: `
    block
    mb-1
    text-xs
    tracking-normal
    font-semibold font-stretch-normal
  `,
});

export default styles;
