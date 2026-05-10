import tw from '@/styles';

const styles = {
  container: (isActive: boolean) => {
    if (isActive) {
      return tw(`
        absolute z-1
        w-full
        translate-x-0
        translate-y-0

        motion-safe:opacity-0
        motion-safe:animate-fade-in-up-slightly-delayed
      `);
    }

    return tw(`
      absolute z-0
      -translate-x-full
      -translate-y-full

      motion-safe:opacity-0
      motion-safe:[transition:opacity_.3s_var(--ease-in-out),translate_0s_linear_.3s]
    `);
  },
};

export default styles;
