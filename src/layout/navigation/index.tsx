import { ROUTES } from '@/routes';
import { LinkArrow, LinkBackdrop } from '@/ui/link';
import {
  Grid,
  GridList,
  GridListItem,
} from '@/ui/navigation/grid';

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
      <h3 className={styles.heading} id={id}>
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
  const isExternal = (new RegExp(['http', 'mailto'].join('|'), 'i')).test(path);

  return (
    <LinkBackdrop
      href={path}
      target={isExternal ? '_blank' : undefined}
    >
      {isExternal ? (
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
      <Grid>
        <GridList columns={3} id="blogging">
          {ROUTES.filter(({ group }) => group === 'blogging').map((item) => (
            <GridListItem key={item.path}>
              <Link {...item} />
            </GridListItem>
          ))}
        </GridList>
      </Grid>
      <Heading id="info" isMenu={isMenu}>
        <strong>INFO</strong>
        <small>More about me</small>
      </Heading>
      <Grid>
        <GridList columns={3} id="info">
          {ROUTES.filter(({ group }) => group === 'info').map((item) => (
            <GridListItem key={item.path}>
              <Link {...item} />
            </GridListItem>
          ))}
        </GridList>
      </Grid>
      <Heading id="connect" isMenu={isMenu}>
        <strong>CONNECT</strong>
        <small>Reach out</small>
      </Heading>
      <Grid>
        <GridList columns={3} id="connect">
          {ROUTES.filter(({ group }) => group === 'connect').map((item) => (
            <GridListItem key={item.path}>
              <Link {...item} />
            </GridListItem>
          ))}
        </GridList>
      </Grid>
      <Heading id="code" isMenu={isMenu}>
        <strong>CODE</strong>
        <small>My bread-n-butter</small>
      </Heading>
      <Grid>
        <GridList columns={3} id="code">
          {ROUTES.filter(({ group }) => group === 'code').map((item) => (
            <GridListItem key={item.path}>
              <Link {...item} />
            </GridListItem>
          ))}
        </GridList>
      </Grid>
    </>
  );
}
