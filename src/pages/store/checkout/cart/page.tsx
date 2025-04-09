import Link from 'next/link';

import Components from '@/components';
import Images from '@/images';
import Styles from '@/styles';

import { useViewModel } from './page.viewModel';

const scss = Styles.Pages.Store.Checkout.Cart.Page;

function Page() {
  const {
    handleOnQuantityChange,
    handleOnRemoveItem,
    isEmpty,
    isLoading,
    isReady,
    items,
    total,
  } = useViewModel();

  return (
    <Components.View title="Store | Cart">
      <Components.Breadcrumbs
        shouldAlignCenter={false}
        items={[
          {
            text: 'Store',
            uri: '/store',
          },
          {
            text: 'Cart',
          },
        ]}
      />
      {isLoading && <Components.Loading />}
      {isReady && (
        <div className={scss.container}>
          {isEmpty ? (
            <div className={scss.empty}>
              <h2>No items in cart</h2>
              <Components.Button href="/store" text="Back to Store" />
            </div>
          ) : (
            <>
              <div className={scss.header}>
                <h1>Total</h1>
                <p>${total}</p>
                <Components.Button
                  href="/store/checkout/confirm"
                  text="Checkout"
                />
              </div>
              <div id="items">
                {items.map((item, index) => (
                  <section className={scss.section} key={index}>
                    <div className={scss.info}>
                      <div className={scss.image}>
                        <button
                          className={scss.remove}
                          onClick={() => handleOnRemoveItem(index)}
                          title="Remove item"
                          type="button"
                        >
                          <Images.Icons.Close />
                        </button>
                        <Link href={item.uri}>
                          <Components.Image
                            alt={item.name}
                            height={432}
                            sizes="(max-width: 768px) 100vw, 25vw"
                            src={item.image}
                            width={768}
                          />
                        </Link>
                      </div>
                      <div className={scss.description}>
                        <div className={scss.name}>
                          <h2>
                            <Link href={item.uri}>{item.name}</Link>
                          </h2>
                          <p className={scss.price}>
                            {item.quantity > 1 && (
                              <>
                                ${item.total} ({item.price} x {item.quantity})
                              </>
                            )}
                            {item.quantity === 1 && <>${item.price}</>}
                          </p>
                        </div>
                        <div className={scss.attributes}>
                          <ul>
                            <li>Size: {item.size}</li>
                            <li>Frame: {item.frame}</li>
                            {item.color !== null && (
                              <li>Color: {item.color}</li>
                            )}
                            {item.mat !== null && <li>Mat: {item.mat}</li>}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={scss.quantity}>
                      <Components.Button
                        mode="secondary"
                        onClick={() => handleOnQuantityChange(index, -1)}
                        text="-"
                        title="Decrease quantity"
                      />
                      <span title={`Quantity of ${item.quantity}`}>
                        {item.quantity}
                      </span>
                      <Components.Button
                        mode="secondary"
                        onClick={() => handleOnQuantityChange(index, 1)}
                        text="+"
                        title="Increase quantity"
                      />
                    </div>
                  </section>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </Components.View>
  );
}

export default Page;
