import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { store } from '@/cache/store';
import type { Store } from '@/types';

type State = {
  items: Store.Data[];
  hasItems: boolean;
};

type Actions = {
  add: (
    id: string,
    options: Store.Styles[],
    frame: number,
    color: number,
    size: number,
    quantity: number,
  ) => void;
  retrieve: () => Store.Cart[];
  remove: (index: number) => void;
  adjust: (index: number, direction: number) => void;
  erase: () => void;
};

export const useCartStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      items: [],
      hasItems: false,
      add: (id, options, frame, color, size, quantity) => {
        const frameId = options[frame]?.id;
        const sizeId = options[frame]?.sizes[size]?.id;
        const colorId = color > -1 ? options[frame]?.colors[color]?.id : '';

        const hash = `${id}-${frameId}-${sizeId}-${colorId}`;

        const items = get().items;

        const existingIndex = items.findIndex((item) => item.hash === hash);

        if (existingIndex > -1) {
          const updatedQuantity = items[existingIndex].quantity + quantity;

          items[existingIndex] = {
            ...items[existingIndex],
            quantity: updatedQuantity > 5 ? 5 : updatedQuantity,
          };
        } else {
          items.push({
            colorId,
            frameId,
            hash,
            itemId: id,
            quantity,
            sizeId,
          });
        }

        set({
          hasItems: items.length > 0,
          items,
        });
      },
      retrieve: () => {
        let results = [];

        get().items.forEach(
          ({ colorId, frameId, itemId, sizeId, quantity }) => {
            const found = store.find(({ id }) => id === itemId);

            if (found) {
              const frame = found.styles.find(({ id }) => id === frameId);

              if (frame) {
                const color = frame.colors.length
                  ? frame.colors.find(({ id }) => id === colorId)
                  : true;
                const size = frame.sizes.find(({ id }) => id === sizeId);
                const frameValue = frame.value.toLowerCase();

                if (color && size) {
                  results.push({
                    color: typeof color !== 'boolean' ? color.value : null,
                    frame: frameValue === 'none' ? 'No' : 'Yes',
                    image: found.image,
                    mat:
                      frameValue === 'none'
                        ? null
                        : frameValue.includes('mat')
                          ? 'Yes'
                          : 'No',
                    name: found.title,
                    price: frame.price,
                    quantity,
                    size: size.value,
                    total: (Number(frame.price) * Number(quantity)).toFixed(2),
                    uri: found.uri,
                  });
                }
              }
            }
          },
        );

        return results;
      },
      remove: (index) => {
        const items = get().items;

        items.splice(index, 1);

        set({
          hasItems: items.length > 0,
          items,
        });
      },
      adjust: (index, direction) => {
        const items = get().items;

        let quantity = items[index].quantity;

        if (direction < 0) {
          quantity = quantity === 1 ? 0 : quantity - 1;
        } else {
          quantity = quantity === 5 ? 5 : quantity + 1;
        }

        if (quantity === 0) {
          items.splice(index, 1);
        } else {
          items[index].quantity = quantity;
        }

        set({
          hasItems: items.length > 0,
          items,
        });
      },
      erase: () => {
        set({
          hasItems: false,
          items: [],
        });
      },
    }),
    {
      name: 'cart-storage',
    },
  ),
);

export const useCartActions = () => useCartStore((state) => state);
export const useCartItems = () => useCartStore((state) => state.items);
export const useCartHasItems = () => useCartStore((state) => state.hasItems);
