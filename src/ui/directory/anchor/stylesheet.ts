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
  font-stretch-condensed
  tracking-tight
  lg:tracking-tighter
  lg:font-stretch-ultra-condensed
  ${isActive ? `text-current/100 font-black lg:font-medium` : `text-current/50 font-thin`}

  hover:font-medium
  hover:tracking-tighter
  hover:text-current/100
`);

const styles = tw({
  container: (isParent: boolean, isChild: boolean, isActive: boolean) => tw(`
    w-full
    duration-275
    overflow-hidden
    uppercase

    lg:inline-block
    lg:pr-4

    ${isParent && parent}
    ${isChild && child(isActive)}
  `),
});

export default styles;
