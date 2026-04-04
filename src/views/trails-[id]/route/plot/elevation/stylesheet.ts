import tw from '@/styles';

const grid = `
  absolute left-0 z-0
  w-full h-px
  bg-(--foreground)/7
`;

const styles = tw({
  heading: `
    font-mono
    text-xtiny text-(--foreground)
    uppercase
    pl-1.5 pt-1.5

    md:pl-3.5
    md:pt-3.5
  `,
  eyebrow: `
    block
    text-(--foreground)/50
  `,
  container: `
    relative
    pt-1
    h-[20vh] w-full
    select-none
    touch-none
    border-t-1 border-t-(--foreground)/20
  `,
  grid1: `
    ${grid}
    top-8.5
  `,
  grid2: `
    ${grid}
    top-17
  `,
  grid3: `
    ${grid}
    top-25.5
  `,
  grid4: `
    ${grid}
    top-34
  `,
  grid5: `
    ${grid}
    top-42.5
  `,
});

export default styles;
