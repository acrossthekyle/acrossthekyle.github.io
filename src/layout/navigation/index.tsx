import { ROUTES } from '@/routes';
import { LinkArrow, LinkBackdrop } from '@/ui/link';

import styles from './stylesheet';

type Props = {
  isMenu?: boolean;
};

type HeadingProps = {
  children: React.ReactNode | React.ReactNode[];
  id: string;
  isMenu?: boolean;
};

type LinkProps = {
  path: string;
  subtitle: string;
  text: string;
};

function Heading({ children, id, isMenu }: HeadingProps) {
  if (isMenu) {
    return (
      <h3 id={id}>
        {children}
      </h3>
    );
  }

  return (
    <h2 id={id}>
      {children}
    </h2>
  );
}

function Link({ path, subtitle, text }: LinkProps) {
  return (
    <LinkBackdrop
      href={path}
      target={path.includes('http') ? '_blank' : undefined}
    >
      {path.includes('http') ? (
        <LinkArrow>{text}</LinkArrow>
      ) : (
        <>{text}</>
      )}
      <small>{subtitle}</small>
    </LinkBackdrop>
  );
}

export default function Menu({ isMenu }: Props) {
  return (
    <>
      <Heading id="blogging" isMenu={isMenu}>
        <strong>BLOGGING</strong>
        <small>My experiences</small>
      </Heading>
      <hr className={styles.hr} />
      <ul aria-labelledby="blogging" className={styles.list(isMenu)}>
        {ROUTES.filter(({ group }) => group === 'blogging').map((item) => (
          <li key={item.path}>
            <Link {...item} />
          </li>
        ))}
      </ul>
      <Heading id="info" isMenu={isMenu}>
        <strong>INFO</strong>
        <small>More about me</small>
      </Heading>
      <hr className={styles.hr} />
      <ul aria-labelledby="info" className={styles.list(isMenu)}>
        {ROUTES.filter(({ group }) => group === 'info').map((item) => (
          <li key={item.path}>
            <Link {...item} />
          </li>
        ))}
      </ul>
      <Heading id="connect" isMenu={isMenu}>
        <strong>CONNECT</strong>
        <small>Reach out</small>
      </Heading>
      <hr className={styles.hr} />
      <ul aria-labelledby="connect" className={styles.list(isMenu)}>
        {ROUTES.filter(({ group }) => group === 'connect').map((item) => (
          <li key={item.path}>
            <Link {...item} />
          </li>
        ))}
      </ul>
      <Heading id="code" isMenu={isMenu}>
        <strong>CODE</strong>
        <small>What and why</small>
      </Heading>
      <hr className={styles.hr} />
      <ul aria-labelledby="code" className={styles.list(isMenu)}>
        {ROUTES.filter(({ group }) => group === 'code').map((item) => (
          <li key={item.path}>
            <Link {...item} />
          </li>
        ))}
      </ul>
    </>
  );
}
