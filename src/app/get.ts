import experiences from '@/db/experiences';
import resume from '@/db/resume';

export default function get() {
  const experience = experiences[0];
  const role = resume.history[0];

  return {
    experience: {
      date: experience.date,
      location: experience.location,
      slug: experience.slug,
      title: experience.title,
      type: experience.type,
    },
    role: {
      date: role.date.start,
      position: role.position,
      title: role.title,
    },
  };
};
