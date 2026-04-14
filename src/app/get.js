import albums from '@/db/albums';
import expertise from '@/db/expertise';
import resume from '@/db/resume';
import trails from '@/db/trails';

export default async function get() {
  return {
    albums: albums.map(({ category, coordinates, id, images, location, title, when }) => ({
      category,
      coordinates,
      count: images.length,
      id,
      location,
      title,
      when,
    })),
    expertise,
    job: {
      isAvailable: !resume[0].when.toLowerCase().includes('current'),
      place: resume[0].place,
      title: resume[0].title,
    },
    resume,
    trails: {
      recent: {
        id: trails[0].id,
        title: trails[0].title,
      },
      all: trails.map(({ coordinates, id, location, title, type, when }) => ({
        coordinates,
        id,
        location,
        title,
        type,
        when,
      })),
    },
  };
};
