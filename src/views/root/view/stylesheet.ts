import tw from '@/styles';

const styles = tw({
  image: `
    w-full max-w-3xs
    mt-0 mb-16 mx-auto
  `,
  subtitle: `
    block
    !text-sm text-current/50

    md:!text-xs
  `,
  more: `
    flex items-center gap-1
    duration-300

    hover:gap-2
  `,
  icon: `
    w-3 h-3
    stroke-3
  `,
});

export default styles;
