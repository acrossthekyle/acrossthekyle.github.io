import tw from '@/styles';

const styles = {
  container: (isActive: boolean) => tw(`
    relative z-1
    cursor-pointer

    motion-safe:duration-300
    motion-safe:hover:bg-(--foreground)/2.5

    ${isActive && `
      col-span-2

      mobile-landscape:col-span-2

      portrait:col-span-1

      md:col-span-1
    `}

    sm:p-2
    sm:-m-2
  `),
};

export default styles;
