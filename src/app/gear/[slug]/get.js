import gear from '@/db/gear';
import places from '@/db/places';

export default function get(id, type) {
  const place = places.find((place) => place.id === id.toLowerCase());
  const data = gear.find(({ placeId }) => placeId === id.toLowerCase());

  if (place === undefined || data === undefined) {
    return null;
  }

  return {
    base: data.weightBase,
    categories: data.categories.filter((category) => {
      if (type === 'base') {
        return category.items.filter((item) => !item.consumable && !item.worn).length > 0;
      }

      if (type === 'consumable') {
        return category.items.filter((item) => item.consumable).length > 0;
      }

      if (type === 'worn') {
        return category.items.filter((item) => item.worn).length > 0;
      }

      return true;
    }).map((category) => ({
      ...category,
      items: category.items.filter((item) => {
        if (type === 'base') {
          return !item.consumable && !item.worn;
        }

        if (type === 'consumable') {
          return item.consumable;
        }

        if (type === 'worn') {
          return item.worn;
        }

        return true;
      }),
    })),
    consumable: data.weightConsumable,
    date: place.year,
    slug: id,
    title: place.title,
    total: data.weightTotal,
    type,
    worn: data.weightWorn,
  };
};
