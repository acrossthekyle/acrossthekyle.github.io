import tw from '@/styles';

const styles = {
  body: (isOnRoot: boolean, isOnParent: boolean) => tw(`
    antialiased
    flex flex-col
    h-full

    ${isOnRoot || isOnParent ? 'md:flex-row' : 'lg:flex-row'}
  `),
};

export default styles;
