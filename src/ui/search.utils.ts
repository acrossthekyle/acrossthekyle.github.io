export function getAllUniqueTitles(posts) {
  return posts
    .getArray()
    .map(({ title }) => title.toLowerCase())
    .filter((value, index, items) => items.indexOf(value) === index);
}

export function getAllUniqueLocations(posts) {
  return posts
    .getArray()
    .map(({ locationFull }) => locationFull.toLowerCase())
    .filter((value, index, items) => items.indexOf(value) === index);
}

export function uniqueResults(results, key) {
  const uniqueResults = new Set();

  return results.filter((item) => {
    const value = item[key];

    if (!uniqueResults.has(value)) {
      uniqueResults.add(value);

      return true;
    }

    return false;
  });
}

export function filterByQuery(
  query: string,
  posts,
  titles: string[],
  locations: string[],
) {
  let results = [];

  if (!!query.trim()) {
    const filterablePosts = [...posts.getArray()];

    query
      .trim()
      .split(' ')
      .forEach((part) => {
        const lowered = part.toLowerCase();

        if (/^\d{4}$/.test(lowered)) {
          results = [
            ...results,
            ...filterablePosts.filter(({ date }) => date.includes(lowered)),
          ];
        }

        const matchedLocations = locations.filter((_) => _.includes(lowered));
        const matchedTitles = titles.filter((_) => _.includes(lowered));

        if (matchedLocations.length > 0 && matchedTitles.length > 0) {
          results = [
            ...results,
            ...filterablePosts.filter(({ locationFull, title }) => {
              return (
                locationFull.toLowerCase().includes(lowered) ||
                title.toLowerCase().includes(lowered)
              );
            }),
          ];
        } else if (matchedLocations.length > 0) {
          results = [
            ...results,
            ...filterablePosts.filter(({ locationFull }) => {
              return locationFull.toLowerCase().includes(lowered);
            }),
          ];
        } else if (matchedTitles.length > 0) {
          results = [
            ...results,
            ...filterablePosts.filter(({ title }) => {
              return title.toLowerCase().includes(lowered);
            }),
          ];
        }
      });
  }

  return uniqueResults(results, 'uri');
}
