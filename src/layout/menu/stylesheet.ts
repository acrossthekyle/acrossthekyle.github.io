import tw from '@/styles';

const styles = tw({
  button: (isActive: boolean) => tw(`
    relative z-1
    flex items-center justify-center gap-2
    font-normal
    text-sm
    capitalize
    py-1
    whitespace-nowrap

    sm:before:absolute
    sm:before:-z-1
    sm:before:top-1
    sm:before:left-0
    sm:before:right-0
    sm:before:bottom-1
    sm:before:rounded-sm
    sm:before:duration-300
    sm:before:ease-in-out
    ${isActive ? 'sm:before:bg-yellow-300 sm:before:text-black' : 'sm:before:bg-transparent'}

    sm:justify-start
    sm:w-full
    sm:text-xs
    sm:p-2
  `),
  first: `
    sm:ml-1
  `,
  last: `
    sm:mr-1
  `,
  icon: `
    w-4.25 h-4.25

    sm:w-3.5
    sm:h-3.5
  `,
  rotate: `
    -rotate-90
  `,
  setting: `
    relative
    flex flex-col items-center
    w-full

    sm:items-start
  `,
  toggle: `
    relative z-1
    items-center gap-2
    w-full
    font-normal
    text-sm
    capitalize
    p-2
    whitespace-nowrap

    motion-safe:duration-300
    motion-safe:ease-in-out
    motion-safe:opacity-50
    motion-safe:focus:opacity-100
    motion-safe:hover:opacity-100

    before:absolute
    before:-z-1
    before:top-1
    before:left-0
    before:right-0
    before:bottom-1
    before:rounded-sm
    before:opacity-5
    before:bg-transparent

    focus:before:bg-yellow-300

    text-xs
    flex
    peer
  `,
  options: `
    flex flex-col items-center gap-0
    absolute
    left-0
    z-2
    bg-(--background)

    motion-safe:opacity-0
    motion-safe:top-10
    motion-safe:-translate-y-100
    motion-safe:peer-focus:opacity-100
    motion-safe:peer-focus:top-0
    motion-safe:peer-focus:translate-y-8

    motion-safe:[transition:opacity_.3s_var(--ease-in-out)_.1s,top_.3s_var(--ease-in-out)_.1s,translate_0s_linear_.4s]
    motion-safe:peer-focus:[transition:opacity_.3s_var(--ease-in-out)_.1s,top_.3s_var(--ease-in-out)_.1s,translate_0s_linear_0s]
  `,
});

export default styles;
