import tw from '@/styles';

const styles = {
  container: (shrink?: boolean) => tw(`
    inline-block
    ${shrink ? 'text-lg/3' : 'text-lg/3.5'}
    font-extrablack font-stretch-semi-expanded
    tracking-tighter
    uppercase

    ${shrink ? 'nano:text-xl/4' : 'nano:text-2xl/4.5'}
    ${shrink ? 'milli:text-2xl/4.5' : 'milli:text-3xl/5.75'}
    ${shrink ? 'centi:text-3xl/5.75' : 'centi:text-4xl/7'}
    ${shrink ? 'base:text-2xl/4.5' : 'base:text-3xl/6'}
    ${shrink ? 'hecto:text-3xl/6' : 'hecto:text-4xl/7'}
    ${shrink ? 'kilo:text-4xl/7' : 'kilo:text-5xl/9.25'}
    ${shrink ? 'peta:text-5xl/9.25' : 'peta:text-6xl/11.5'}
  `),
};

export default styles;
