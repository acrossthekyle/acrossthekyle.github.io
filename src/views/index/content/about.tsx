import {
  Article,
  External,
  Heading,
  Paragraph,
  Prefix,
} from './components';

export default function About() {
  return (
    <Article id="about">
      <Heading>
        <Prefix>Backstory</Prefix>
        About
      </Heading>
      <Paragraph>
        After spending hundreds of days and thousands of miles walking through forests, over mountains, and across entire countries, I'm still always seeking the next adventure – from the heights of the Himalayas in Nepal to the windswept expanses of Patagonia.
      </Paragraph>
      <Paragraph>
        Between adventures I moonlight as a self-taught <External url="https://linkedin.com/in/acrossthekyle?ref=acrossthekyle.com">software engineer</External> with a thrill for writing code and creating user interfaces as a Sr. Software Engineer @ Optum.
      </Paragraph>
    </Article>
  );
};
