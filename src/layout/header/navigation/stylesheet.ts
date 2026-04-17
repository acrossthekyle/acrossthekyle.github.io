import tw from '@/styles';

const styles = tw({
  container: `
    flex items-center justify-end gap-4
    text-(--layout-foreground)
  `,
  link: `
    py-1
    font-sans font-black
    text-xtiny
    uppercase
    tracking-wider
    border-b-1 border-b-transparent border-dashed
    duration-300

    hover:border-b-(--layout-foreground)
  `,
});

export default styles;
