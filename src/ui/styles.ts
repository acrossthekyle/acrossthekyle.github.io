export const cta = `
  relative
  flex items-center justify-between gap-3
  capitalize
  text-base
  w-full
  min-h-6
  px-0.5

  before:block
  before:absolute
  before:-inset-1.5
  before:z-0
  before:duration-300
  before:rounded-sm
  before:border
  before:border-(--foreground)/7
  before:bg-(--foreground)/10

  hover:before:bg-(--foreground)/25
`;
