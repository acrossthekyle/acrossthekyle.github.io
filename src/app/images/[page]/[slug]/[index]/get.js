import images from '@/db/images';
import photos from '@/db/photos';
import places from '@/db/places';
import stages from '@/db/stages';

import { padIndex } from '../../../../utils';

function getPhotosItem(page, slug, index) {
  const found = photos.find((item) => item.slug === slug);

  if (found === undefined) {
    return null;
  }

  const key = Number(index) - 1;

  if (key < 0 || key > photos.length - 1) {
    return null;
  }

  const result = photos[key];

  const next = key === photos.length - 1 ? null : key + 2;
  const previous = key === 0 ? null : key;

  return {
    back: [
      {
        text: '/snapshots',
        uri: '/photos',
      },
    ],
    hasNavigation: next !== null || previous !== null,
    next: next ? `${page}/${photos[next - 1].slug}/${padIndex(next)}` : '',
    previous: previous ? `${page}/${photos[previous - 1].slug}/${padIndex(previous)}` : '',
    src: result.src,
    subTitle: result.location,
    title: `Snapshot ${index}/${padIndex(photos.length)}`,
    total: padIndex(photos.length),
  };
}

function getPlacesItem(page, slug, index) {
  const place = places.find((item) => item.id === slug);
  const stage = stages.find(({ id, placeId }) => id === index && placeId === slug);
  const image = images.find(({ id, placeId }) => id === index && placeId === slug);
  const total = stages.filter(({ placeId }) => placeId === slug).length;

  if (place === undefined || stage === undefined || image === undefined) {
    return null;
  }

  const key = Number(index) - 1;

  if (key < 0 || key > total - 1) {
    return null;
  }

  const next = key === total - 1 ? null : key + 2;
  const previous = key === 0 ? null : key;

  return {
    back: [
      {
        text: '/places',
        uri: '/places',
      },
      {
        text: `/${place.title.toLowerCase()}`,
        uri: `/places/${slug}`
      },
      {
        text: '/images',
        uri: `/places/${slug}#images`
      },
    ],
    hasNavigation: next !== null || previous !== null,
    next: next ? `${page}/${slug}/${padIndex(next)}` : '',
    previous: previous ? `${page}/${slug}/${padIndex(previous)}` : '',
    src: image.path,
    subTitle: `${stage.title} • ${stage.location}, ${place.location}`,
    title: `${place.title} Image ${index}/${padIndex(total)}`,
    total: padIndex(total),
  };
}

export default function get(
  page,
  slug,
  index,
) {
  const data = page === 'photos'
    ? getPhotosItem(page, slug, index)
    : getPlacesItem(page, slug, index);

  if (data === null) {
    return null;
  }

  return data;
};
