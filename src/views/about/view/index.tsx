import { Article } from '@/ui/article';

import Hero from './hero';
import {
  Heading,
  HeadingEyebrow,
} from './heading';
import Link from './link';
import Paragraph from './paragraph';
import {
  SectionAfter,
  SectionBefore,
  SectionHorizontal,
} from './section';

export default function View() {
  return (
    <Article>
      <Hero />
      <SectionHorizontal a11yLabel="Background">
        <SectionBefore labelledBy="ui">
          <Heading id="ui">
            <HeadingEyebrow>01.</HeadingEyebrow>
            Creating things from scratch motivates me to do what I do.
          </Heading>
          <Paragraph>
            Making things with code  thrills me to no end: digital experiences are my bread and butter. With attention to detail, and an ability to adapt, I produce everlasting things.
          </Paragraph>
          <Paragraph>
            I'm a self-taught web developer/software engineer/UI developer/coder with a strong background in JavaScript/TypeScript, and HTML/CSS.
          </Paragraph>
          <Paragraph>
            I have hands-on experience working on high-traffic, customer-facing products and prioritize building clean, maintainable codebases that enable continuous improvement and scalability.
          </Paragraph>
        </SectionBefore>
        <SectionAfter labelledBy="hike">
          <Heading id="hike">
            <HeadingEyebrow>02.</HeadingEyebrow>
            Experiencing new sights and sounds keeps me moving.
          </Heading>
          <Paragraph>
            The mountains are my church, and after hiking more than 1,900 miles of trail nothing inspires me more than leaving the crowded city behind and heading into nature carrying everything I need on my back.
          </Paragraph>
          <Paragraph>
            I thru-hiked my first trail in 2018 called the Camino, in Spain. It took me 32 days to walk from the Pyrenees mountains in the east to the Atlantic ocean in the west, and it was unforgetable.
          </Paragraph>
          <Paragraph>
            If I can walk dozens of miles every day for a weeks on end, I can do anything.
          </Paragraph>
        </SectionAfter>
      </SectionHorizontal>
      <SectionHorizontal a11yLabel="Conclusion">
        <SectionBefore labelledBy="addendum">
          <Heading id="addendum">
            <HeadingEyebrow>03.</HeadingEyebrow>
            Collaboration creates community
          </Heading>
          <Paragraph>
            I'm always open to new opportunities. If you're interested in working together, or have questions about any of the travels/hikes that I've done, you can reach out via <Link href="mailto:hello@acrossthekyle.com">email</Link>, view my <Link href="/acrossthekyle-resume.pdf" isExternal>resume</Link>, or find me online at <Link href="https://linkedin.com/in/acrossthekyle" isExternal>LinkedIn</Link> and <Link href="https://instagram.com/acrossthekyle" isExternal>Instagram</Link>.
          </Paragraph>
          <Paragraph>
            You can find the codebase for this site on{' '}
            <Link href="https://github.com/acrossthekyle/acrossthekyle.github.io" isExternal>github.com</Link>.
          </Paragraph>
        </SectionBefore>
      </SectionHorizontal>
    </Article>
  );
}
