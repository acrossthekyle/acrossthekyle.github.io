import tw from '@/styles';

const styles = {
  container: (isOpen) => tw(`
    relative
    mt-2
    mx-2
    backdrop-blur-xs
    bg-white/10
    rounded-lg
    ease-in-out duration-500
    overflow-hidden

    ${isOpen ? 'h-auto' : 'h-12'}

    sm:mx-6
    sm:mt-6
  `),
  toggle: tw(`
    relative
    flex items-center
    text-xs text-left uppercase
    cursor-pointer
    p-4
    border-b-1 border-b-white/10

    w-full
  `),
  chevron: tw(`
    absolute right-4
    w-4
    h-4
  `),
  weight: tw(`
    absolute right-12
  `),
  categories: (isOpen) => tw(`
    w-full
    h-auto
    p-4

    ${isOpen ? (`
      opacity-100

      [transition:opacity_.5s_var(--ease-in-out)]
    `) : (`
      opacity-0

      [transition:opacity_.5s_var(--ease-in-out)]
    `)}
  `),
  category: tw(`
    relative
    w-full
    mb-4

    first:mb-7
    last:mb-0
 `),
  cta: tw(`
    flex flex-1 items-start justify-between
    w-full
    cursor-pointer
    text-xs text-left uppercase
  `),
  icon: tw(`
    w-3.5 h-3.5
    me-2
  `),
  heading: tw(`
    flex flex-col flex-2 justify-between
  `),
  right: tw(`
    text-right
  `),
  count: tw(`
    block
    mt-1
    text-tiny
  `),
};

export default styles;
