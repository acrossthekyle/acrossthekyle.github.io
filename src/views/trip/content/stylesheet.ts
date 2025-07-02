import tw from '@/styles';

import { View } from './types';

const styles = {
  container: tw(`
    absolute inset-0 z-2
    duration-500
    bg-(--background)
  `),
  inner: tw(`
    relative
    flex flex-col gap-0
    h-full
    ease-in-out duration-800

    md:flex-row
  `),
  images: (view: View) => tw(`
    relative
    ease-in-out duration-500
    overflow-hidden

    ${view === View.ImageWithMap ? 'flex-2' : ''}
    ${view === View.ImageOverMap ? 'flex-1' : ''}
    ${view === View.MapWithImage ? 'flex-1' : ''}
  `),
  routes: (view: View) => tw(`
    relative
    ease-in-out duration-500
    overflow-hidden

    ${view === View.ImageWithMap ? 'flex-1' : ''}
    ${view === View.ImageOverMap ? 'flex-0' : ''}
    ${view === View.MapWithImage ? 'flex-2' : ''}
  `),
  close: tw(`
    absolute top-0 left-0 z-3
    cursor-pointer
    p-3

    sm:p-6
  `),
  icon: tw(`
    w-5 h-5
    stroke-1
  `),
  toggle: tw(`
    absolute left-3 bottom-3 z-2
    flex items-center justify-center
    w-8 h-8
    cursor-pointer
    bg-white/10
    backdrop-blur-sm
    rounded-lg

    sm:left-6
    sm:bottom-6
  `),
  gear: tw(`
    w-5 h-5
    stroke-white
    stroke-2
  `),
};

export default styles;
