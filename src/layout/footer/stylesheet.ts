import tw from '@/styles';

const styles = tw({
  container: `
    w-full max-w-lg
    mt-16 mx-auto mb-0
    opacity-0
    animate-in-fade
  `,
  anchor: `
    inline-block
    mb-16
  `,
  copyright: `
    text-xs text-(--foreground)/50
  `,
});

export default styles;
