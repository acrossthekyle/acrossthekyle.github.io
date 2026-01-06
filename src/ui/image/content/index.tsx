import { Title } from '../../typography';

import styles from './stylesheet';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  id?: string;
};

export default function Content({ children, className, id }: Props) {
  return (
    <Title className={`${styles.content} ${className || ''}`.trim()} id={id}>
      {children}
    </Title>
  );
}
