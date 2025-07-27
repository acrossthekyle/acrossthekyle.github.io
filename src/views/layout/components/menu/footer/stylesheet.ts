import tw from '@/styles';

const styles = tw({
  links: `
    flex flex-row items-center justify-center
    w-full
    text-white text-tiny uppercase font-light
    px-3

    3xs:px-0
  `,
  link: `
    mb-3
    mx-1

    after:content-['_↗']

    3xs:mx-2
  `,
});

export default styles;
