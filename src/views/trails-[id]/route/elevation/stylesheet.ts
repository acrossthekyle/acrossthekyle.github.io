import tw from '@/styles';

const grid = `
  absolute left-0 z-0
  w-full h-px
  bg-(--foreground)/7
`;

const styles = tw({
  heading: `
    hidden
    absolute bottom-2.75 left-3.5
    font-mono
    text-xtiny text-(--foreground)
    uppercase

    sm:block
    lg:bottom-10.5
    xl:bottom-2.75
  `,
  eyebrow: `
    block
    text-(--foreground)/50
  `,
  container: `
    relative
    mt-27
    pt-1
    h-[20vh] w-full
    select-none
    touch-none
    border-t-1 border-t-(--foreground)/20

    sm:mb-12
    lg:mb-0
    lg:mt-0
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
