import tw from '@/styles';

const styles = tw({
  container: `
    group
    flex items-start
    w-full
    leading-[0.775]
    text-5xl

    lg:h-dvh
    lg:pl-2
    lg:py-6
    xl:py-12
    lg:overflow-y-scroll

    has-[.isParent]:p-6
    has-[.isParent]:xs:text-6xl
    has-[.isParent]:sm:text-7xl
    has-[.isParent]:md:text-8xl
    has-[.isParent]:lg:text-7xl
    has-[.isParent]:xl:py-12
    has-[.isParent]:xl:text-8xl

    has-[.isChild]:p-6
    has-[.isChild]:lg:py-12
    has-[.isChild]:lg:text-6xl
    has-[.isChild]:lg:w-[27%]
    has-[.isChild]:xl:text-8xl
    has-[.isChild]:xl:w-[30%]
  `,
});

export default styles;
