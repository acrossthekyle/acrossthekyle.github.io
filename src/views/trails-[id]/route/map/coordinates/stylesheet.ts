import tw from '@/styles';

const styles = tw({
  grid: `
    absolute inset-0 z-301
    opacity-3
    bg-[linear-gradient(to_right,var(--foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--foreground)_1px,transparent_1px)]
    bg-size-[24px_24px]
  `,
  columns: `
    absolute top-0.5 left-0 right-0 z-305
    h-6
    overflow-hidden
  `,
  column: `
    inline-block
  `,
  rows: `
    absolute left-0 top-6 bottom-0 z-305
    overflow-hidden
  `,
  cell: `
    w-6 h-6
    flex items-center justify-center
    font-mono
    text-[5px] text-(--foreground)/25
  `,
});

export default styles;
