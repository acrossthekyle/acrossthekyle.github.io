import tw from '@/styles';

const styles = tw({
  article: `
    mt-12 mb-8
  `,
  figure: `
    relative
  `,
  image: `
    !h-6
    !w-auto
    mb-6
    !rounded-none
  `,
  caption: `
    invisible
    absolute top-0 right-0
  `,
  spread: `
    flex items-end justify-between
    font-black
  `,
  date: `
    font-normal
  `,
  list: `
    flex flex-col gap-2
  `,
  responsibilities: `
    ml-4
    list-disc
    leading-7
  `,
  skill: `
    flex gap-4

    flex-row
    items-center
    justify-between
  `,
});

export default styles;
