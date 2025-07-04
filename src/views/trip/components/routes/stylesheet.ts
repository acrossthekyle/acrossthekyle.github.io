import tw from '@/styles';
import { View } from '@/types';

const styles = {
  container: (view: View) => tw(`
    relative
    ease-in-out duration-500
    overflow-hidden

    ${view === View.ImageWithMap ? 'flex-1' : ''}
    ${view === View.ImageOverMap ? 'flex-0' : ''}
    ${view === View.MapWithImage ? 'flex-2' : ''}
  `),
  inner: tw(`
    absolute
    h-full
    w-full
  `),
};

export default styles;
