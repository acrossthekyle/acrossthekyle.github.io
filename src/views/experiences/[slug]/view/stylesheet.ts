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
  date: `
    block
    !text-sm text-current/50

    md:!text-xs
  `,
  list: `
    grid grid-cols-3 gap-4

    sm:grid-cols-4
  `,
  link: `
    relative
  `,
  image: `
    aspect-square
    duration-300

    hover:scale-110
  `,
});

export default styles;
