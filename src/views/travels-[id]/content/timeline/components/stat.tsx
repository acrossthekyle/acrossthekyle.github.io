import { ArrowDown, ArrowUp, Triangle } from 'lucide-react';

import tw from '@/styles';
import Ui from '@/ui';

type Props = {
  type: string;
  value?: number;
};

type ContainerProps = {
  className?: string;
};

function Container({
  children,
  className = '',
}: React.PropsWithChildren<ContainerProps>) {
  return (
    <span className={`${styles.container} ${className}`.trim()}>
      {children}
    </span>
  );
}

export default function Stat({ type, value }: Props) {
  if (value === undefined) {
    return null;
  }

  if (type === 'elevation') {
    return (
      <Container className={styles.push}>
        <Triangle aria-hidden="true" className={styles.icon} />
        <Ui.Units.Length isSmall value={value} />
      </Container>
    );
  }

  if (type === 'distance') {
    return (
      <Container>
        <Ui.Units.Length value={value} />
      </Container>
    );
  }

  if (type === 'time') {
    return (
      <Container>
        {value} hrs
      </Container>
    );
  }

  if (type === 'gain') {
    return (
      <Container>
        <ArrowUp aria-hidden="true" className={styles.icon} />
        <Ui.Units.Length isCompact isSmall value={value} />
      </Container>
    );
  }

  if (type === 'loss') {
    return (
      <Container>
        <ArrowDown aria-hidden="true" className={styles.icon} />
        <Ui.Units.Length isCompact isSmall value={value} />
      </Container>
    );
  }

  return null;
};

const styles = tw({
  container: `
    shrink-0
    inline-flex items-center gap-1
    lowercase
    mr-2.5

    last:mr-0
  `,
  icon: `
    w-2.5 h-2.5
    stroke-3
  `,
  push: `
    ml-1.25
  `,
});
