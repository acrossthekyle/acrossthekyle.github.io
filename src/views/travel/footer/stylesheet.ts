import tw from '@/styles';

const styles = tw({
  more: `
    flex flex-col items-center
    w-full
    py-2
    mt-6
    text-xl text-center
    font-black font-stretch-extra-condensed
    uppercase
    duration-300

    hover:text-yellow-300/90

    mega:mt-12
  `,
  shown: `
    block
    text-sm
    font-normal
  `,
});

export default styles;
