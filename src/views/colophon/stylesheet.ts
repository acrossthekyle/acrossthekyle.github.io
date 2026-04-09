import tw from '@/styles';

const styles = tw({
  definition: `
    flex justify-between
    mb-4
    w-full
    font-mono
    text-xtiny
    uppercase
  `,
  section: `
    absolute bottom-4 left-4
    flex flex-col gap-4
  `,
  heading: `
    absolute -top-8
    leading-[1]
    font-sans font-black
    text-sm
    uppercase
  `,
  paragraph: `
    w-full
    leading-[1.25]
    font-sans font-light
    text-sm

    sm:w-94
    md:mr-4

    last:mr-0
  `,
});

export default styles;
