import tw from '@/styles';

const styles = tw({
  meta: `
    capitalize
  `,
  date: `
    text-current/50
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
