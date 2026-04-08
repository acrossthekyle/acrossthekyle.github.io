import tw from '@/styles';

const styles = tw({
  items: `
    grid grid-cols-8 gap-8
    mt-8 mb-3
    text-(--background)
  `,
  link: (isActive: boolean) => tw(`
    group
    block
    font-sans font-black
    text-sm ${isActive ? 'text-current' : 'text-current/40'}
    uppercase
    duration-300

    md:hover:text-current/100
  `),
  eyebrow: (isActive: boolean) => tw(`
    block
    font-mono
    text-xtiny ${isActive ? 'text-current/70' : 'text-current/40'}
    duration-300

    md:group-hover:text-current/70
  `),
  lid: (isActive: boolean) => tw(`
    block
    uppercase
    font-mono
    text-xtiny ${isActive ? 'text-current/50' : 'text-current/40'}
    duration-300

    md:group-hover:text-current/50
  `),
});

export default styles;
