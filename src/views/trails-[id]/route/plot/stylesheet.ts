import tw from '@/styles';

const styles = {
  container: (isToggled: boolean) => tw(`
    flex-1
    mt-1
    h-[83vh]
    w-full
    rounded-md
    border border-(--foreground)/20
    overflow-hidden
    duration-300

    xs:h-[72vh]

    ${isToggled ? 'translate-x-[100vw]' : 'translate-x-0'}
  `),
};

export default styles;
