import expertise from '@/db/expertise';
import resume from '@/db/resume';

export default function get() {
  return {
    expertise,
    resume,
  };
};
