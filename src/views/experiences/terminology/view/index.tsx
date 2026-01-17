import Link from 'next/link';

import { Layout } from '@/layout';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/ui/breadcrumbs';

export default function View() {
  return (
    <Layout group="experiences">
      <header>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link href="/">
                Home
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link href="/experiences">
                Experiences
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                Terminology
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1>
          <strong>Terminology</strong>
          <small>
            What are all these things?
          </small>
        </h1>
      </header>
      <h2 id="thru-hike">
        <strong>Thru-Hike</strong>
      </h2>
      <p>
        Thru-hiking is basically deciding to go for a walk...and not stopping. It means hiking an entire long-distance trail from one end to the other, covering hundreds or even thousands of miles in one continuous stretch.
        </p>
        <p className="!mb-16">You live out of a backpack with everything you need, and each day is mostly just waking up, walking, eating, walking some more, and sleeping. Some days feel incredible with big views and quiet moments where everything clicks; other days are miserable, wet, painful, and full of "why am I doing this" thoughts.
        </p>
      <h2 id="section-hike">
        <strong>Section Hike</strong>
      </h2>
      <p>
        Section-hiking is thru-hiking's more reasonable counterpart. Instead of doing the whole trail in one giant push, you break it into smaller chunks and hike a section at a time. Maybe doing a few days, a week, or whatever fits into your life. You still carry your pack, sleep outside, and deal with sore feet and weather mood swings, but you know there's a clear end point coming up.
      </p>
      <p className="!mb-16">
        Over time, those sections add up. You might hike one piece this year, another next year, and slowly stitch the whole thing together. It's all about balance: figuring out how to keep a foot in normal life while still chasing that long-distance hike feeling.
      </p>
      <h2 id="peak-bagging">
        <strong>Peak-Bagging</strong>
      </h2>
      <p>
        Peak-bagging is when hiking turns into a very specific kind of scavenger hunt. Instead of following one long trail, you're trying to stand on the tops of a bunch of different mountains, usually all the peaks in a certain list or area. The hikes might be short or long, easy or brutal, but the goal is the same every time: get to the summit, take a breath, maybe a photo, and then head back down.
      </p>
      <p>
        Each peak feels like checking something off a list, which is way more satisfying than it probably should be.
      </p>
    </Layout>
  );
}
