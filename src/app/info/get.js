import expertise from '@/db/expertise';
import resume from '@/db/resume';

export default async function get() {
  return {
    expertise,
    resume,
  };
};
