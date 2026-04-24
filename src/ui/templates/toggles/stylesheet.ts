import tw from '@/styles';

const styles = tw({
  container: `
    absolute bottom-6 left-0 z-1
    w-full
    flex items-center justify-center gap-8

    motion-safe:duration-300

    lg:invisible
    lg:motion-safe:opacity-0
  `,
  button: `
    flex items-center gap-2
    text-sm

    motion-safe:opacity-50
    motion-safe:duration-300
    motion-safe:hover:opacity-100
  `,
  icon: `
    w-3 h-3
  `,
});

export default styles;
