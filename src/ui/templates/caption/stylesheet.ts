import tw from '@/styles';

const styles = tw({
  container: (canRender: boolean) => tw(`
    absolute -top-6 bottom-6 right-0 z-1
    flex justify-center
    pt-2 px-0
    w-full
    font-sans font-medium
    rounded-lg
    text-sm
    bg-(--background)/95

    ${canRender ? `
      motion-safe:opacity-100
      motion-safe:translate-x-0
      motion-safe:translate-y-0
      motion-safe:[transition:opacity_.3s_var(--ease-in-out),translate_0s_linear_0s]
    ` : `
      motion-safe:opacity-0
      motion-safe:-translate-x-full
      motion-safe:-translate-y-full
      motion-safe:[transition:opacity_.3s_var(--ease-in-out),translate_0s_linear_.3s]
    `}

    lg:translate-x-0
    lg:translate-y-0
    lg:flex-col
    lg:justify-end
    lg:top-auto
    lg:!opacity-100
    lg:bg-transparent
    lg:w-64
    lg:text-xs
  `),
  inner: `
    relative
    flex flex-col justify-end
    w-full max-w-133
    px-4 pt-2 pb-6

    lg:h-137
    lg:pb-0
  `,
});

export default styles;
