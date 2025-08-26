import tw from '@/styles';

const styles = tw({
  pulse: (isOnChild: boolean) => tw(`
    h-30
    ${isOnChild ? 'w-70' : 'w-[calc(100%-1.5rem)] ml:w-[calc(100%-5rem)]'}
    bg-neutral-900
    animate-pulse
  `),
});

export default styles;
