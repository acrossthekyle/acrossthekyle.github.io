import tw from '@/styles';

const styles = tw({
  section: `
    mt-16
  `,
  article: `
    mt-12 mb-8
  `,
  figure: `
    relative
  `,
  image: `
    !w-1/4
    mb-6
  `,
  caption: `
    invisible
    absolute top-0 right-0
  `,
  spread: `
    flex items-end justify-between
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
  `,
  skill: `
    flex gap-4

    flex-row
    items-center
    justify-between
  `,
});

export default styles;
