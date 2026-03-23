import tw from '@/styles';

const styles = tw({
  container: `
    flex items-end
    h-full
    ps-12 pb-12 pr-12
    leading-[0.775]

    has-[.isRoot]:text-8xl
    has-[.isParent]:text-5xl
    has-[.isChild]:text-3xl
  `,
});

export default styles;
