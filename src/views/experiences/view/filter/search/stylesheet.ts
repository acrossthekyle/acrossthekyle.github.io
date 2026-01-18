import tw from '@/styles';

const styles = tw({
  container: `
    relative
    block
    mb-8
  `,
  search: `
    relative
    flex items-center gap-2
    h-12 w-full
    rounded-sm
    duration-300
    outline-1 outline-(--foreground)/25

    hover:outline-(--foreground)/50
  `,
  icon: `
    absolute top-4.25 left-3
    w-4 h-4
    stroke-2 stroke-current/50
  `,
  input: `
    w-full h-full
    pl-10
    text-white text-sm
    placeholder-gray-500 placeholder:uppercase placeholder:text-xs
    bg-transparent
  `,
});

export default styles;
