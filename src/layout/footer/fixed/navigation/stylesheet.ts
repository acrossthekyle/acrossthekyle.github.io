import tw from '@/styles';

const styles = tw({
  container: `
    flex items-center justify-center gap-1
    text-(--layout-foreground)
  `,
  link: `
    mx-2
    py-1
    font-sans font-black
    text-xtiny
    uppercase
    tracking-wider
    border-b-1 border-b-transparent border-dashed
    duration-300

    hover:border-b-(--layout-foreground)
  `,
  divider: `
    inline-block
    ml-0.5
  `,
});

export default styles;
