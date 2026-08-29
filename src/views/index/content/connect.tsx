import {
  Article,
  External,
  Heading,
  Paragraph,
  Prefix,
} from './components';

export default function Connect() {
  return (
    <Article id="connect">
      <Heading>
        <Prefix>Social Media / Email</Prefix>
        Connect
      </Heading>
      <Paragraph>
        Sometimes I post stuff on <External url="https://instagram.com/acrossthekyle?ref=acrossthekyle.com"> Instagram </External>, but the best way to get in touch is via <External url="mailto:hello@acrossthekyle.com">email</External>.
      </Paragraph>
    </Article>
  );
};
