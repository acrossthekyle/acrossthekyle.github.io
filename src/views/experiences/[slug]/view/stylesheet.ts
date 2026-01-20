import tw from '@/styles';

const styles = tw({
  badge: `
    flex items-center gap-1
  `,
  icon: `
    w-3 h-3
    stroke-3
  `,
  meta: `
    capitalize
  `,
  subtitle: `
    block
    !text-sm text-current/50

    md:!text-xs
  `,
  list: `
    grid grid-cols-3 gap-4

    md:grid-cols-4
  `,
  image: `
    aspect-square
    duration-300

    hover:scale-110
  `,
});

export default styles;
