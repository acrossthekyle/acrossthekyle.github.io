import tw from '@/styles';

export const styles = tw({
  container: (isOpen: boolean) => tw(`
    absolute bottom-0 right-0 z-2
    flex items-center gap-2
    p-4
    text-(--foreground)
    font-thin font-mono
    text-xtiny
    uppercase
    tracking-widest
  `),
  inner: (isActive: boolean) => tw(`
    ${isActive ? 'line-through' : ''}
  `),
});


