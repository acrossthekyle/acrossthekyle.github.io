import tw from '@/styles';

const styles = tw({
  container: `
    flex flex-col gap-0.5
    font-mono font-normal
  `,
  link: `
    leading-[1]
    text-xtiny
    uppercase
  `,
  text: `
    text-xtiny text-(--layout-foreground)
    whitespace-nowrap
    truncate

    xl:max-w-46
  `,
});

export default styles;
