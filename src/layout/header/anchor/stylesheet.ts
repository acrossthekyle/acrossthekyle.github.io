import tw from '@/styles';

const root = `
  isRoot
  tracking-tight
  font-black font-stretch-semi-normal

  hover:tracking-wide
  hover:font-thin
`;

const common = (isActive: boolean) => `
  tracking-tighter
  font-thin font-stretch-extra-condensed
  ${isActive ? 'text-current/100' : 'text-current/50'}

  hover:text-current/100
`;

const styles = {
  container: (isRoot: boolean, isParent: boolean, isChild: boolean, isActive: boolean) => tw(`
    inline-block
    duration-200
    overflow-hidden
    uppercase

    ${isRoot ? root : common(isActive)}
    ${isParent && 'isParent'}
    ${isChild && 'isChild'}
  `),
};

export default styles;
