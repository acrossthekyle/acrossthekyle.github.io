import tw from '@/styles';

const styles = tw({
  footer: `
    relative
    w-full
    flex justify-between
    py-20 px-8
    border-t border-white/10
  `,
  wrapper: `
    group

    [:nth-child(1)]:text-left
    [:nth-child(2)]:text-right
  `,
  navigation: (hasEnteredView: boolean, isPrevious: boolean) => tw(`
    relative
    flex flex-col gap-0
    cursor-pointer
    text-white uppercase
    duration-500

    hover:text-yellow-300

    ${hasEnteredView && isPrevious ? `animate-slide-in-left opacity-100` : 'opacity-0'}
    ${hasEnteredView && !isPrevious ? `animate-slide-in-right opacity-100` : 'opacity-0'}
  `),
  eyebrow: `
    block
    mb-2
    text-base font-medium font-stretch-ultra-condensed
  `,
  icon: `
    inline
    -mt-0.5
    w-3 h-3
    stroke-3

    group-[:nth-child(1)]:me-2
    group-[:nth-child(2)]:ms-2
  `,
  title: `
    text-4xl font-black
  `,
  year: `
    text-base font-black text-stone-400 font-stretch-ultra-condensed
  `,
});

export default styles;
