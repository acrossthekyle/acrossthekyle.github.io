import Image from '../image';

import { useViewModel } from './gallery.zoom.viewModel';

type Props = {
  alt?: string;
  height: number;
  sizes?: string;
  src: string;
  width: number;
};

function Zoom(props: Props) {
  const { handleOnClick, imageRef, isActive, isZoomed, style } = useViewModel();

  return (
    <Image
      alt=""
      {...props}
      canTransform={false}
      data-zoom={isActive ? (isZoomed === false ? 'false' : 'true') : 'false'}
      onClick={handleOnClick}
      ref={imageRef}
      style={style}
    />
  );
}

export default Zoom;
