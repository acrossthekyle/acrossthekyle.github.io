import tw from '@/styles';

export const styles = tw({
  container: (isCurrent: boolean) => tw(`
    relative
    flex flex-row items-end

    ${isCurrent ? `
      line-through decoration-1
    ` : ''}
  `),
  arrow: `
    mx-2
    w-5 h-5
    stroke-1
  `,
});


