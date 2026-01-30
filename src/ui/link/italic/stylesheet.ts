import tw from '@/styles';

const styles = tw({
  container: (asButton?: boolean) => tw(`
    flex ${asButton ? 'items-end' : 'items-center'} gap-2
    font-semibold
    text-base text-left
    duration-300

    hover:gap-3

    md:text-sm
  `),
  icon: `
    w-4
    stroke-2
  `,
});

export default styles;
