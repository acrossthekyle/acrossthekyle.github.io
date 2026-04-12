import tw from '@/styles';

const styles = {
  container: (isToggled: boolean) => tw(`
    sticky top-12
    flex-1
    mt-1
    h-[calc(100vh-6.25rem)]
    w-full
    rounded-xs
    border border-(--foreground)/10
    overflow-hidden
    duration-300

    xs:h-[calc(100vh-6.5rem)]

    ${isToggled ? 'translate-x-[100vw]' : 'translate-x-0'}
  `),
};

export default styles;
