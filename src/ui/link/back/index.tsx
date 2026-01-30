import { ArrowUpLeft } from 'lucide-react';

import Button from '../button';

import styles from './stylesheet';

type Props = {
  href: string;
};

export default function Back({ href }: Props) {
  return (
    <Button className={styles.container} href={href}>
      <ArrowUpLeft className={styles.icon} /> Back
    </Button>
  );
}
