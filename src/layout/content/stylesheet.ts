import tw from '@/styles';

const styles = tw({
  container: `
    relative z-1
    flex flex-col
    min-h-[calc(100vh-4.5rem)]
    mt-6 mx-2
    p-4
    bg-(--background)
    text-(--foreground)
    animate-fade-in

    before:absolute
    before:inset-0
    before:z-0
    before:bg-[radial-gradient(color-mix(in_srgb,var(--foreground),transparent_90%)_1px,transparent_1px)]
    before:bg-size-[20px_20px]
  `,
});

export default styles;
