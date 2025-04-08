import Components from '@/components';
import Styles from '@/styles';

import Policies from '../component.policies';
import Aside from './page.component.aside';
import Descriptions from './page.component.descriptions';
import Info from './page.component.info';
import Form from './page.component.form';

import { useViewModel } from './page.viewModel';

const scss = Styles.Pages.Store.Item.Page;

function Page() {
  const {
    color,
    colorOptions,
    frame,
    frameOptions,
    handleOnAddToCart,
    handleOnSelectColor,
    handleOnSelectFrame,
    handleOnSelectQuantity,
    handleOnSelectSize,
    hasColors,
    image,
    isLoading,
    isReady,
    name,
    price,
    quantity,
    quantityOptions,
    size,
    sizeOptions,
    snippet,
  } = useViewModel();

  if (isLoading) {
    return (
      <Components.View title="Store">
        <Components.Loading />
      </Components.View>
    );
  }

  if (!isReady) {
    return null;
  }

  return (
    <Components.View title={`Store | ${name}`}>
      <Components.Breadcrumbs
        shouldAlignCenter={false}
        items={[
          {
            text: 'Store',
            uri: '/store',
          },
          {
            text: name,
          },
        ]}
      />
      <div className={scss.wrapper}>
        <Aside color={color} frame={frame} image={image} name={name} />
        <div className={scss.content}>
          <Info name={name} price={price} snippet={snippet} />
          <Form
            color={color}
            colorOptions={colorOptions}
            frame={frame}
            frameOptions={frameOptions}
            onAddToCart={handleOnAddToCart}
            onSelectColor={handleOnSelectColor}
            onSelectFrame={handleOnSelectFrame}
            onSelectQuantity={handleOnSelectQuantity}
            onSelectSize={handleOnSelectSize}
            hasColors={hasColors}
            quantity={quantity}
            quantityOptions={quantityOptions}
            size={size}
            sizeOptions={sizeOptions}
          />
          <Descriptions frame={frame} />
          <Policies />
        </div>
      </div>
    </Components.View>
  );
}

export default Page;
