import { Article } from '@/ui/article';

import Hero from './hero';
import {
  HeadingIndex,
  HeadingLarge,
  HeadingSmall,
} from './heading';
import Link from './link';
import {
  List,
  ListItemContentList,
  ListItemContentListItem,
  ListItemContentListItemJustified,
  ListItemContentListItemLabel,
  ListItemHeading,
  ListItemHeadingSubtext,
  ListItem,
} from './list';
import Paragraph from './paragraph';
import {
  SectionHorizontal,
  SectionBefore,
  SectionAfter,
  SectionVertical,
} from './section';

export default function View() {
  return (
    <Article isFull>
      <Hero />
      <SectionHorizontal a11yLabel="Background">
        <SectionBefore id="ui">
          <HeadingLarge id="ui">
            <HeadingIndex index="01." />
            Creating things from scratch motivates me to do what I do.
          </HeadingLarge>
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
        <SectionAfter id="hike">
          <HeadingLarge id="hike">
            <HeadingIndex index="02." />
            Experiencing new sights and sounds keeps me moving.
          </HeadingLarge>
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
      <SectionVertical id="career">
        <HeadingSmall id="career">
          <HeadingIndex index="03." />
          Career
        </HeadingSmall>
        <List>
          <ListItem>
            <ListItemHeading>
              Optum
              <ListItemHeadingSubtext>
                Health solution and care delivery organization
              </ListItemHeadingSubtext>
              <ListItemHeadingSubtext>
                2020 &mdash; Present
              </ListItemHeadingSubtext>
            </ListItemHeading>
            <ListItemContentList>
              <ListItemContentListItem>
                <ListItemContentListItemJustified>
                  <ListItemContentListItemLabel>Position:</ListItemContentListItemLabel>
                  Senior Software Engineer II
                </ListItemContentListItemJustified>
              </ListItemContentListItem>
              <ListItemContentListItem>
                <ListItemContentListItemJustified>
                  <ListItemContentListItemLabel>Location:</ListItemContentListItemLabel>
                  Chicago, IL
                </ListItemContentListItemJustified>
              </ListItemContentListItem>
              <ListItemContentListItem>
                <ListItemContentListItemJustified>
                  <ListItemContentListItemLabel>Industry:</ListItemContentListItemLabel>
                  Healthcare
                </ListItemContentListItemJustified>
              </ListItemContentListItem>
              <ListItemContentListItem>
                <ListItemContentListItemJustified>
                  <ListItemContentListItemLabel>Website:</ListItemContentListItemLabel>
                  <Link href="https://www.optum.com" isExternal>
                    www.optum.com
                  </Link>
                </ListItemContentListItemJustified>
              </ListItemContentListItem>
            </ListItemContentList>
          </ListItem>
          <ListItem>
            <ListItemHeading>
              Rally Health
              <ListItemHeadingSubtext>
                Personalized data-driven health care
              </ListItemHeadingSubtext>
              <ListItemHeadingSubtext>
                2018 &mdash; 2020
              </ListItemHeadingSubtext>
            </ListItemHeading>
            <ListItemContentList>
              <ListItemContentListItem>
                <ListItemContentListItemJustified>
                  <ListItemContentListItemLabel>Position:</ListItemContentListItemLabel>
                  Senior Frontend Engineer
                </ListItemContentListItemJustified>
              </ListItemContentListItem>
              <ListItemContentListItem>
                <ListItemContentListItemJustified>
                  <ListItemContentListItemLabel>Location:</ListItemContentListItemLabel>
                  Chicago, IL
                </ListItemContentListItemJustified>
              </ListItemContentListItem>
              <ListItemContentListItem>
                <ListItemContentListItemJustified>
                  <ListItemContentListItemLabel>Industry:</ListItemContentListItemLabel>
                  Healthcare
                </ListItemContentListItemJustified>
              </ListItemContentListItem>
              <ListItemContentListItem>
                <ListItemContentListItemJustified>
                  <ListItemContentListItemLabel>Website:</ListItemContentListItemLabel>
                  <Link href="www.rallyhealth.com" isExternal>
                    www.rallyhealth.com
                  </Link>
                </ListItemContentListItemJustified>
              </ListItemContentListItem>
            </ListItemContentList>
          </ListItem>
          <ListItem>
            <ListItemHeading>
              Earlybird Co
              <ListItemHeadingSubtext>
                Custom web design and development startup
              </ListItemHeadingSubtext>
              <ListItemHeadingSubtext>
                2015 &mdash; 2018
              </ListItemHeadingSubtext>
            </ListItemHeading>
            <ListItemContentList>
              <ListItemContentListItem>
                <ListItemContentListItemJustified>
                  <ListItemContentListItemLabel>Position:</ListItemContentListItemLabel>
                  Fullstack Engineer
                </ListItemContentListItemJustified>
              </ListItemContentListItem>
              <ListItemContentListItem>
                <ListItemContentListItemJustified>
                  <ListItemContentListItemLabel>Location:</ListItemContentListItemLabel>
                  Chicago, IL
                </ListItemContentListItemJustified>
              </ListItemContentListItem>
              <ListItemContentListItem>
                <ListItemContentListItemJustified>
                  <ListItemContentListItemLabel>Industry:</ListItemContentListItemLabel>
                  Tech
                </ListItemContentListItemJustified>
              </ListItemContentListItem>
            </ListItemContentList>
          </ListItem>
          <ListItem>
            <ListItemHeading>
              Red Frog Events
              <ListItemHeadingSubtext>
                Experiential entertainment events
              </ListItemHeadingSubtext>
              <ListItemHeadingSubtext>
                2013 &mdash; 2015
              </ListItemHeadingSubtext>
            </ListItemHeading>
            <ListItemContentList>
              <ListItemContentListItem>
                <ListItemContentListItemJustified>
                  <ListItemContentListItemLabel>Position:</ListItemContentListItemLabel>
                  Web Developer
                </ListItemContentListItemJustified>
              </ListItemContentListItem>
              <ListItemContentListItem>
                <ListItemContentListItemJustified>
                  <ListItemContentListItemLabel>Location:</ListItemContentListItemLabel>
                  Chicago, IL
                </ListItemContentListItemJustified>
              </ListItemContentListItem>
              <ListItemContentListItem>
                <ListItemContentListItemJustified>
                  <ListItemContentListItemLabel>Industry:</ListItemContentListItemLabel>
                  Event
                </ListItemContentListItemJustified>
              </ListItemContentListItem>
            </ListItemContentList>
          </ListItem>
          <ListItem>
            <ListItemHeading>
              Silverline Creative
              <ListItemHeadingSubtext>
                Custom web design and development studio
              </ListItemHeadingSubtext>
              <ListItemHeadingSubtext>
                2012 &mdash; 2013
              </ListItemHeadingSubtext>
            </ListItemHeading>
            <ListItemContentList>
              <ListItemContentListItem>
                <ListItemContentListItemJustified>
                  <ListItemContentListItemLabel>Position:</ListItemContentListItemLabel>
                  Junior Web Developer
                </ListItemContentListItemJustified>
              </ListItemContentListItem>
              <ListItemContentListItem>
                <ListItemContentListItemJustified>
                  <ListItemContentListItemLabel>Location:</ListItemContentListItemLabel>
                  Naperville, IL
                </ListItemContentListItemJustified>
              </ListItemContentListItem>
              <ListItemContentListItem>
                <ListItemContentListItemJustified>
                  <ListItemContentListItemLabel>Industry:</ListItemContentListItemLabel>
                  Tech
                </ListItemContentListItemJustified>
              </ListItemContentListItem>
            </ListItemContentList>
          </ListItem>
        </List>
      </SectionVertical>
      <SectionHorizontal>
        <SectionBefore id="addendum">
          <HeadingLarge id="addendum">
            <HeadingIndex index="04." />
            Addendum
          </HeadingLarge>
          <Paragraph>
            I'm always open to new opportunities. If you're interested in working together, or have questions about any of the travels/hikes that I've done, find me online at any of{' '}
            <Link href="/contact">these locations</Link>.
          </Paragraph>
          <Paragraph>
            You can find the codebase for this site on{' '}
            <Link href="https://github.com/acrossthekyle/acrossthekyle.github.io" isExternal>github.com</Link>.
          </Paragraph>
        </SectionBefore>
        <SectionAfter />
      </SectionHorizontal>
    </Article>
  );
}
