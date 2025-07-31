import tw from '@/styles';

const styles = tw({
  search: `
    group
    relative
    h-10 w-auto
    ms-8
    duration-500
  `,
  input: `
    w-full h-full
    text-white font-thin tracking-wide
    border-transparent
    rounded-full
    duration-500
    pl-10
    bg-zinc-800
    border
    border-white/5

    placeholder:text-white/30
    placeholder:text-xs
    placeholder:uppercase
    placeholder:font-thin
    placeholder:tracking-wide

    focus:outline-none
    focus:ring-1
    focus:ring-white/50

    sm:w-50
  `,
  submit: `
    absolute left-3 top-3
    rounded-lg
    border-transparent
    flex items-center justify-center
    transition-all
    cursor-pointer
  `,
  icon: `
    h-4 w-4
    stroke-1
    stroke-white/50
  `,
});

export default styles;
