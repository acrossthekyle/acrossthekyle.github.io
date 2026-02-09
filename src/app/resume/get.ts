import data from '@/db/resume';

export default function get() {
  return {
    education: data.education,
    history: data.history.map(({ date, description, position, title}) => ({
      date,
      description,
      position,
      title,
    })),
    skills: data.skills,
  };
};
