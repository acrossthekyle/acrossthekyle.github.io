import tw from '@/styles';

const styles = tw({
  container: `
    w-full

    has-[.isChild]:lg:bg-(--background)
    has-[.isChild]:lg:text-(--foreground)
    has-[.isChild]:lg:gap-0
    has-[.isChild]:lg:py-0
    has-[.isChild]:lg:overflow-x-auto
  `,
});

export default styles;
