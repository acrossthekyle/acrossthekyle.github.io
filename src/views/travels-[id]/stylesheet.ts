import tw from '@/styles';

const OUTER = [
  // 2
  [
    `
      w-10/12

      md:w-8/12
      md:pr-12
    `,
    `
      w-8/12
      mx-auto
      pt-12

      md:w-4/12
      md:mx-0
      md:pt-48
      lg:pt-64
    `,
  ],
  // 1
  [
    `w-full
    mx-auto

    md:w-9/12
  `,
  ],
  // 2
  [
    `
      w-full

      md:w-4/12
      md:mx-0
      md:pr-16
    `,
    `
      w-10/12
      pt-12

      md:w-8/12
      md:pt-16
    `,
  ],
  // 1
  [
    `
      w-full
      mx-auto

      md:w-9/12
    `,
  ],
  // 1
  [
    `
      w-full
      mx-auto
      px-4

      md:w-5/12
      md:px-6
    `,
  ],
];

const FIGURE = [
  // 2
  [
    `
    `,
    `
      text-right

      md:pt-32
    `,
  ],
  // 1
  [
    `
      pt-8
      text-right
    `,
  ],
  // 2
  [
    `
    `,
    `
      text-right

      md:pt-32
    `,
  ],
  // 1
  [
    `
      pt-8
      text-right
    `,
  ],
  // 1
  [
    `
      pt-8
    `,
  ],
];

const IMAGE = [
  // 2
  [
    `
      aspect-16/10
    `,
    `
      aspect-12/16
    `,
  ],
  // 1
  [
    `
      aspect-16/11
    `,
  ],
  // 2
  [
    `
      aspect-12/16
    `,
    `
      aspect-16/10
    `,
  ],
  // 1
  [
    `
      aspect-16/11
    `,
  ],
  // 1
  [
    `
      aspect-12/16
    `,
  ],
];

export const styles = tw({
  container: `
    flex flex-col gap-6
    overflow-x-clip
  `,









  header: `
    relative
    h-auto w-svw

    md:h-svh
    md:mb-12
  `,

  title: `
    absolute top-6 left-6 z-100
    flex flex-col
    leading-[0.8]
    uppercase
    text-[min(6vw,2.25rem)] text-(--background) dark:text-(--foreground)
    font-black
    whitespace-nowrap

    md:text-(--foreground)
    md:dark:text-(--foreground)
  `,
  line: `
    origin-left
    scale-x-[0.75]
    tracking-tight
  `,

  phrase: `
    absolute top-1/2 right-5
    -translate-y-1/2
    flex flex-col items-end
    font-black
    text-[min(5.5vw,5rem)] text-(--background) dark:text-(--foreground)
    uppercase
    leading-[0.85]

    md:text-(--foreground)
    md:dark:text-(--foreground)
  `,
  row: `
    flex gap-2
    whitespace-nowrap

    md:gap-6
  `,

  notes: `
    flex flex-col gap-4
    w-full
    px-6
    mt-6

    md:absolute
    md:bottom-6
    md:left-0
  `,
  note: `
    w-full
    text-sm
    leading-[1.75]

    first:first-letter:float-left
    first:first-letter:mr-1
    first:first-letter:ml-6
    first:first-letter:leading-[1]
    first:first-letter:text-[3rem]
    first:first-letter:font-black

    sm:max-w-80
    md:text-xs
    md:first:first-letter:text-[2.6rem]
  `,

  info: `
    absolute top-34 right-6
    flex flex-col gap-2
    text-right text-tiny text-(--background) dark:text-(--foreground)
    uppercase
    leading-[0.8]
    tracking-wide

    md:text-(--foreground)
    md:dark:text-(--foreground)
  `,

  cover: `
    relative left-1/2 -z-1
     -translate-x-1/2
    aspect-square
    w-full h-[74svh]
    opacity-80
    sepia-10
    duration-300

    md:w-[74svh]
    md:opacity-75
    md:absolute
    md:top-1/2
    md:-translate-y-1/2
  `,

  back: `
    absolute top-4 right-6
    uppercase
    font-black
    origin-right scale-x-[0.8]
    text-base text-(--background) dark:text-(--foreground)

    md:text-(--foreground)
    md:dark:text-(--foreground)
  `,








  gallery: `
    relative
    flex flex-col gap-10
    py-6
  `,
  chunk: `
    flex flex-wrap
    w-full
    px-6

    md:px-24
  `,
  outer: (index: number, key: number, isInView: boolean) => tw(`
    relative
    duration-500
    ${isInView ? 'scale-100 top-0 opacity-100' : 'scale-95 top-10 opacity-0'}

    ${OUTER[index % OUTER.length][key]}
  `),
  figure: (index: number, key: number) => tw(`
    ${FIGURE[index % FIGURE.length][key]}
  `),
  inner: `
    block
    overflow-hidden
  `,
  image: (index: number, key: number) => tw(`
    sepia-10
    ${IMAGE[index % IMAGE.length][key]}
  `),
  caption: `
    flex flex-col gap-0.5
    mt-4
    text-xs
  `,
  eyebrow: `
    text-xtiny
    uppercase
    tracking-widest
  `,
  label: `
    font-medium
  `,
  lid: `
    text-current/60
  `,
});
