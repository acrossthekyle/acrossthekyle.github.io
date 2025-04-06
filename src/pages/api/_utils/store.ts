import type { Search, Store } from '@/types';

export function getUniqueTitles(items: Store.Item.Api.Item[]): string[] {
  return items
    .map(({ title }) => title.toLowerCase())
    .filter((value, index, items) => items.indexOf(value) === index);
}

export function filterStoreItemsByQuery(
  items: Store.Item.Api.Item[],
  query: string,
): Search.Item[] {
  const titles = getUniqueTitles(items);

  let results = [];

  if (!!query.trim()) {
    const filterable = [...items];

    query
      .trim()
      .split(' ')
      .forEach((part) => {
        const lowered = part.toLowerCase();

        const matchedTitles = titles.filter((_) => _.includes(lowered));

        if (matchedTitles.length > 0) {
          results = [
            ...results,
            ...filterable.filter(({ title }) => {
              return title.toLowerCase().includes(lowered);
            }),
          ];
        }
      });
  }

  return results.map(({ price, title, uri }) => ({
    subTitle: `From $${price}`,
    title,
    uri,
  }));
}
