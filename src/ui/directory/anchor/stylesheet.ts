import tw from '@/styles';

const parent = `
  isParent
  tracking-tight
  font-black font-stretch-condensed

  group-hover:text-current/50
  hover:tracking-wide
  hover:font-thin
  hover:text-current/100
`;

const child = (isActive: boolean) => tw(`
  isChild
  font-stretch-ultra-condensed
  ${isActive ? `text-current/100 !tracking-tighter font-medium` : `text-current/50 tracking-tighter font-thin`}

  hover:font-medium
  hover:tracking-tighter
  hover:text-current/100
`);

const styles = tw({
  container: (isParent: boolean, isChild: boolean, isActive: boolean) => tw(`
    inline-block
    w-full pr-4
    duration-275
    overflow-hidden
    uppercase

    ${isParent && parent}
    ${isChild && child(isActive)}
  `),
});

export default styles;
