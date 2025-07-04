import tw from '@/styles';
import { View } from '@/types';

const styles = {
  container: (view: View) => tw(`
    relative
    ease-in-out duration-500
    overflow-hidden

    ${view === View.ImageWithMap ? 'flex-2' : ''}
    ${view === View.ImageOverMap || view === View.MapWithImage ? 'flex-1' : ''}
  `),
};

export default styles;
