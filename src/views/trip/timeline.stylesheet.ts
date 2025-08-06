import tw from '@/styles';

const styles = tw({
  timeline:  `
    relative
    flex flex-col gap-16
  `,
  stage: `
    group/stage
    relative
  `,
  figure: `
    relative z-0
    overflow-hidden
  `,
  button: `
    relative
  `,
  image: `
    relative z-1
    aspect-3/2
    object-cover
    w-full h-full
    grayscale-100
    brightness-40
    transform-gpu duration-400

    group-hover/stage:brightness-90
    group-hover/stage:grayscale-0
  `,
  caption: `
    absolute bottom-8 left-8 z-2
    me-8
    pointer-events-none

  `,
  eyebrow: `
    mb-0.5
    text-sm text-white
    font-medium
    uppercase
    tracking-widest
    transform-gpu duration-250

    group-hover/stage:font-normal
    group-hover/stage:tracking-tight
  `,
  index: `
    inline-block
    me-1
  `,
  title: `
    text-4xl/7
    font-black
    uppercase
    tracking-normal
    transform-gpu duration-250

    group-hover/stage:font-semibold
    group-hover/stage:tracking-tighter
    group-hover/stage:font-stretch-condensed
  `,
  details: `
    group/details
    absolute right-8 top-8 z-2
    cursor-pointer
    opacity-0
    duration-300

    group-hover/stage:opacity-100
  `,
  icon: `
    h-8 w-8
    stroke-1
    duration-300

    group-hover/details:stroke-2
  `,
});

export default styles;
