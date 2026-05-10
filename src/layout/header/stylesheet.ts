import tw from '@/styles';

const styles = tw({
  // toggle: (isOpen: boolean) => tw(`
  //   fixed top-5 left-1/2 z-99
  //   -translate-x-1/2

  //   rounded-full
  //   p-2
  //   border-1 border-current/20
  //   bg-(--background)

  //   motion-safe:duration-500

  //   ${isOpen && 'motion-safe:rotate-180'}

  //   lg:hidden
  // `),
  // backdrop: (isOpen: boolean) => tw(`
  //   ${isOpen ? 'block' : 'hidden'}
  //   absolute top-0 z-98
  //   h-auto w-full

  //   lg:hidden
  // `),
  // foo: `
  //   absolute top-0
  //   h-300 w-full
  //   backdrop-blur-sm
  // `,
  container: (isOpen: boolean) => tw(`
    ${isOpen ? 'flex' : 'hidden'}
    fixed top-15 left-1/2 z-99
    -translate-x-1/2
    flex flex-col items-start gap-2
    h-auto w-60
    p-2
    rounded-2xl
    bg-(--background)
    pointer-events-auto

    motion-safe:duration-300
    motion-safe:ease-in-out

    lg:flex
    lg:flex-row
    lg:items-start
    lg:h-9
    lg:p-0
    lg:w-auto
    lg:rounded-md
    lg:top-2
  `),
  button: (isActive: boolean) => tw(`
    relative z-1
    flex items-center justify-start gap-2
    w-full
    font-normal
    text-sm
    capitalize
    p-2
    whitespace-nowrap

    motion-safe:duration-300
    motion-safe:ease-in-out

    ${isActive ? 'motion-safe:opacity-100' : 'motion-safe:opacity-50'}
    motion-safe:hover:opacity-100

    before:absolute
    before:-z-1
    before:top-1
    before:left-0
    before:right-0
    before:bottom-1
    before:rounded-sm
    before:opacity-5
    ${isActive ? 'before:bg-(--foreground)' : 'before:bg-transparent'}

    lg:text-xs
  `),
  first: `
    ml-1
  `,
  last: `
    mr-1
  `,
  icon: `
    w-4 h-4

    min-[498px]:w-3.5
    min-[498px]:h-3.5
  `,
  rotate: `
    -rotate-90
  `,
  menu: `
    relative
    flex flex-col
    w-full
  `,
  toggle: `
    peer
    relative z-1
    flex items-center gap-2
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

    focus:before:bg-(--foreground)

    lg:text-xs
  `,
  options: `
    absolute left-0 z-2
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
