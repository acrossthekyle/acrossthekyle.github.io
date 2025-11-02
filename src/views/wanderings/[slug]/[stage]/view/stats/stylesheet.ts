import tw from '@/styles';

const styles = tw({
  list: `
    grid grid-cols-2 gap-4
  `,
  item: `
    flex flex-col gap-0
  `,
  heading: `
    capitalize
    font-black
  `,
  view: `
    w-26
    py-2
    mt-3.5
    border-1
    rounded-full
    font-black
    text-xs text-center
    uppercase
    duration-300

    hover:bg-current/10
  `,
  gpx: (isOpen: boolean) => tw(`
    flex flex-col
    fixed inset-0
    w-full h-full
    bg-black
    duration-250

    ${isOpen ? (`
      opacity-100
      translate-x-0
      z-9999

      [transition:opacity_.5s_var(--ease-in-out),translate_0s]
    `) : (`
      opacity-0
      translate-x-full
      z-0

      [transition:opacity_.5s_var(--ease-in-out),translate_0s_linear_.5s]
    `)}
  `),
  close: `
    absolute top-4 right-4 z-9999
    text-white/90
  `,
});

export default styles;
