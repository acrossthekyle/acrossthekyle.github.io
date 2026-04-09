import tw from '@/styles';

const styles = tw({
  corners: `
    sticky
    flex justify-between
  `,
  upper: `
    z-3
    top-8
  `,
  lower: `
    z-2
    bottom-10
    -mt-2
  `,
  corner: `
    w-2 h-2
  `,
  left: `
    ml-2
  `,
  right: `
    mr-2
  `,
  one: `
    bg-[radial-gradient(8px_at_100%_100%,transparent_98%,var(--layout-background))]
  `,
  two: `
    bg-[radial-gradient(8px_at_0%_100%,transparent_98%,var(--layout-background))]
  `,
  three: `
    bg-[radial-gradient(8px_at_100%_0%,transparent_98%,var(--layout-background))]
  `,
  four: `
    bg-[radial-gradient(8px_at_0%_0%,transparent_98%,var(--layout-background))]
  `,
});

export default styles;
