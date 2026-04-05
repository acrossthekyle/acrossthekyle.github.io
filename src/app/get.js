import resume from '@/db/resume';
import trails from '@/db/trails';

export default function get() {
  return {
    job: {
      place: resume[0].place,
      title: resume[0].title,
    },
    trail: {
      id: trails[0].id,
      title: trails[0].title,
    },
  };
};
