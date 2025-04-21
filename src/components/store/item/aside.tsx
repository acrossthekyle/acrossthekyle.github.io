import Styles from '@/styles';

import Image from '../../image';

const scss = Styles.Components.Store.Item.Aside;

type Props = {
  color: number;
  frame: number;
  image: string;
  name: string;
};

function Aside({ color, frame, image, name }: Props) {
  return (
    <div className={scss.aside}>
      <div className={scss.image} data-frame={frame} data-frame-color={color}>
        <Image
          alt={name}
          canTransform={false}
          height={432}
          sizes="(max-width: 768px) 100vw, 50vw"
          src={image}
          width={768}
        />
      </div>
    </div>
  );
}

export default Aside;
