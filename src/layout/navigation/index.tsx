import { ROUTES } from '@/routes';
import { LinkArrow, LinkBackdrop } from '@/ui/link';
import {
  Grid,
  GridList,
  GridListItem,
} from '@/ui/navigation/grid';
import { Heading, Small, Strong } from '@/ui/typography';

import Units from './units';
import Theme from './theme';

type Props = {
  isMenu?: boolean;
};

type HeaderProps = {
  children: React.ReactNode | React.ReactNode[];
  id: string;
  isMenu?: boolean;
};

type LinkProps = {
  path: string;
  subtitle: string;
  text: string;
};

function Header({ children, id, isMenu }: HeaderProps) {
  if (isMenu) {
    return (
      <Heading level={3} id={id}>
        {children}
      </Heading>
    );
  }

  return (
    <Heading level={2} id={id}>
      {children}
    </Heading>
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
        <Strong><LinkArrow>{text}</LinkArrow></Strong>
      ) : (
        <Strong>{text}</Strong>
      )}
      <Small>{subtitle}</Small>
    </LinkBackdrop>
  );
}

export default function Menu({ isMenu }: Props) {
  return (
    <>
      <Header id="blogging" isMenu={isMenu}>
        <Strong uppercase>Blogging</Strong>
        <Small>My experiences</Small>
      </Header>
      <Grid>
        <GridList columns={3} id="blogging">
          {ROUTES.filter(({ group }) => group === 'blogging').map((item) => (
            <GridListItem key={item.path}>
              <Link {...item} />
            </GridListItem>
          ))}
        </GridList>
      </Grid>
      <Header id="info" isMenu={isMenu}>
        <Strong uppercase>Info</Strong>
        <Small>More about me</Small>
      </Header>
      <Grid>
        <GridList columns={3} id="info">
          {ROUTES.filter(({ group }) => group === 'info').map((item) => (
            <GridListItem key={item.path}>
              <Link {...item} />
            </GridListItem>
          ))}
        </GridList>
      </Grid>
      <Header id="connect" isMenu={isMenu}>
        <Strong uppercase>Connect</Strong>
        <Small>Reach out</Small>
      </Header>
      <Grid>
        <GridList columns={3} id="connect">
          {ROUTES.filter(({ group }) => group === 'connect').map((item) => (
            <GridListItem key={item.path}>
              <Link {...item} />
            </GridListItem>
          ))}
        </GridList>
      </Grid>
      <Header id="code" isMenu={isMenu}>
        <Strong uppercase>Code</Strong>
        <Small>Technical stuff</Small>
      </Header>
      <Grid>
        <GridList columns={3} id="code">
          {ROUTES.filter(({ group }) => group === 'code').map((item) => (
            <GridListItem key={item.path}>
              <Link {...item} />
            </GridListItem>
          ))}
        </GridList>
      </Grid>
      <Header id="settings" isMenu={isMenu}>
        <Strong uppercase>Settings</Strong>
        <Small>Preferences</Small>
      </Header>
      <Grid>
        <GridList columns={3} id="settings">
          {ROUTES.filter(({ group }) => group === 'settings').map((item) => (
            <GridListItem key={item.text}>
              {item.text === 'theme' && <Theme />}
              {item.text === 'units' && <Units />}
            </GridListItem>
          ))}
        </GridList>
      </Grid>
    </>
  );
}
