import tw from '@/styles';

const styles = {
  search: tw(`
    relative
    h-10
    bg-black/30
    rounded-2xl
    ring ring-white/10
    inset-shadow-sm/25
    w-full
    me-8

    sm:w-80
    sm:-left-1
  `),
  input: tw(`
    w-full
    h-full
    bg-transparent
    text-white font-thin tracking-wide
    border border-transparent
    rounded-lg
    pl-4 pr-10
    transition duration-300 ease

    placeholder:text-white/30
    placeholder:text-xs
    placeholder:uppercase
    placeholder:font-thin
    placeholder:tracking-wide

    focus:outline-none
    focus:border
    focus:border-white/40

    hover:border
    hover:border-white/30
  `),
  submit: tw(`
    absolute right-4 top-3
    w-4 h-4
    rounded-lg
    border border-transparent
    flex items-center justify-center
    transition-all
    shadow-sm
    cursor-pointer
  `),
  icon: tw(`w-5 h-5 fill-white/10`),
};

export default styles;
