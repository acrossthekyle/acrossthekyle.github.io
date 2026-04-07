import resume from '@/db/resume';
import trails from '@/db/trails';

export default async function get() {
  return {
    job: {
      isAvailable: !resume[0].when.toLowerCase().includes('current'),
      place: resume[0].place,
      title: resume[0].title,
    },
    trail: {
      id: trails[0].id,
      title: trails[0].title,
    },
  };
};
