import Link from 'next/link';

import { RESUME_URL } from '@/constants/urls';

function Resume() {
  return (
    <Link href={RESUME_URL} target="_blank" rel="noreferrer">
      Resume
    </Link>
  );
}

export default Resume;
