import experiences from '@/db/experiences';
import resume from '@/db/resume';

export default function get() {
  const role = resume.history[0];

  return {
    experiences: experiences.slice(0, 2).map(({ date, location, slug, title, type }) => ({
      date,
      location,
      slug,
      title,
      type,
    })),
    role: {
      date: role.date.start,
      position: role.position,
      title: role.title,
    },
  };
};
