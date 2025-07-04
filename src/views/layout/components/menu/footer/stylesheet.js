import tw from '@/styles';

const styles = {
  links: tw(`
    flex flex-row items-center justify-center
    w-full
    text-white text-tiny uppercase font-light
    px-3

    3xs:px-0
  `),
  link: tw(`
    mb-3
    mx-1

    after:content-['_↗']

    3xs:mx-2
  `),
};

export default styles;
