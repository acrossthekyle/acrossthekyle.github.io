import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col gap-1
    mt-4
  `,
  link: `
    text-xtiny
  `,
  text: `
    text-xtiny text-(--layout-foreground)
    whitespace-nowrap
    truncate

    xl:max-w-46
  `,
});

export default styles;
