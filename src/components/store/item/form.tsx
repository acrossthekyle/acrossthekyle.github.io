import Styles from '@/styles';

import Button from '../../button';

import Select from './form.select';

const scss = Styles.Components.Store.Item.Form;

type Props = {
  color: number;
  colorOptions: string[];
  frame: number;
  frameOptions: string[];
  onAddToCart: () => void;
  onSelectColor: (index: number) => void;
  onSelectFrame: (index: number) => void;
  onSelectQuantity: (index: number) => void;
  onSelectSize: (index: number) => void;
  hasColors: boolean;
  quantity: number;
  quantityOptions: string[];
  size: number;
  sizeOptions: string[];
};

function Form({
  color,
  colorOptions,
  frame,
  frameOptions,
  onAddToCart,
  onSelectColor,
  onSelectFrame,
  onSelectQuantity,
  onSelectSize,
  hasColors,
  quantity,
  quantityOptions,
  size,
  sizeOptions,
}: Props) {
  return (
    <form className={scss.form}>
      <div className={scss.item}>
        <Select
          label="Frame"
          onChange={onSelectFrame}
          options={frameOptions}
          value={frame}
        />
      </div>
      <div className={scss.item}>
        <Select
          label="Size"
          onChange={onSelectSize}
          options={sizeOptions}
          value={size}
        />
      </div>
      {hasColors && (
        <div className={scss.item}>
          <Select
            label="Frame Color"
            onChange={onSelectColor}
            options={colorOptions}
            value={color}
          />
        </div>
      )}
      <div className={scss.item}>
        <Select
          label="Quantity"
          onChange={onSelectQuantity}
          options={quantityOptions}
          value={quantity}
        />
      </div>
      <Button className={scss.add} onClick={onAddToCart} text="Add to cart" />
      <small className={scss.disclaimer}>
        * Image shown is preview-only, actual amount of photo space cropped on
        final product may vary
      </small>
    </form>
  );
}

export default Form;
