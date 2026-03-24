import tw from '@/styles';

const styles = tw({
  container: `
    flex items-end
    h-auto
    p-6
    leading-[0.775]

    lg:pt-0
    xl:p-12

    has-[.isRoot]:h-dvh
    has-[.isRoot]:text-5xl
    has-[.isRoot]:xs:text-5xl
    has-[.isRoot]:sm:text-6xl
    has-[.isRoot]:md:text-7xl
    has-[.isRoot]:lg:text-8xl

    has-[.isParent]:pb-0
    has-[.isParent]:text-4xl
    has-[.isParent]:lg:text-5xl
    has-[.isParent]:xl:pb-12

    has-[.isChild]:pb-0
    has-[.isChild]:text-4xl
    has-[.isChild]:lg:text-3xl
    has-[.isChild]:xl:pb-12
  `,
});

export default styles;
