import Link from 'next/link';

import type { Stage } from '@/types';
import { Article } from '@/ui/article';
import {
  Image,
  ImageFigure,
  ImageMaximize,
  ImageOptions,
  ImagePlaceholder,
  ImageRotateWarning,
  ImageSkeleton,
} from '@/ui/image';

type Props = {
  data: {
    index: string;
    location: string;
    slug: string;
    stage: Stage;
    title: string[];
    type: string;
  };
};

type Section = {
  heading?: string;
  value: string;
};

export default function View({ data }: Props) {
  const sections: Section[] = [];

  if (data.stage.location) {
    if (['section-hike'].includes(data.type)) {
      sections.push({
        heading: 'Location',
        value: `${data.stage.location}, ${data.location}`,
      });
    } else {
      sections.push({
        heading: 'Location',
        value: data.stage.location,
      });
    }
  }

  if (['peak-bagging', 'section-hike', 'thru-hike'].includes(data.type)) {
    if (data.stage.stats.distance) {
      sections.push({
        heading: 'Distance',
        value: `${data.stage.stats.distance.value.imperial} ${data.stage.stats.distance.units.imperial.full}`,
      });
    }

    if (data.stage.stats.gain || data.stage.stats.loss) {
      sections.push({
        heading: `Elevation Gain ${data.stage.stats.loss ? '/ Loss' : ''}`.trim(),
        value: [
          data.stage.stats.gain && `${data.stage.stats.gain.value.imperial} ${data.stage.stats.gain.units.imperial.abbreviated}`,
          data.stage.stats.loss && `${data.stage.stats.loss.value.imperial} ${data.stage.stats.loss.units.imperial.abbreviated}`
        ].filter(Boolean).join(' / '),
      });
    }

    if (data.stage.stats.max) {
      sections.push({
        heading: 'Max Altitude',
        value: `${data.stage.stats.max.value.imperial} ${data.stage.stats.max.units.imperial.abbreviated}`,
      });
    }
  }

  return (
    <Article>
      <Link
        className="hidden uppercase font-black mb-8 tracking-tighter base:inline-block"
        href={`/experiences/${data.slug}#${data.index}`}
      >
        Back
      </Link>
      <header className="mb-8">
        <h1 className="font-black text-7xl/14 uppercase tracking-tighter mb-1 -ml-0.75">
          {!data.stage.termini.isSame && (
            <span className="block pl-0.75 text-xs font-normal tracking-wider">
              {data.index}.{' '}
              {data.stage.termini.start.join(' ')} To
            </span>
          )}
          {data.stage.termini.isSame && data.type === 'peak-bagging' && (
            <span className="block pl-0.75 text-xs font-normal tracking-wider">
              {data.location}
            </span>
          )}
          {data.stage.termini.end.join(' ')}
        </h1>
        <h2 className="uppercase text-xs tracking-wider">
          {data.stage.date}
        </h2>
      </header>
      <ImageFigure>
        <Image src={data.stage.image}>
          <ImagePlaceholder>
            <ImageOptions
              alt=""
              colorize
              height={1080}
              sizes="(max-width: 768px) 100vw, 50vw"
              width={1920}
            />
            <ImageMaximize />
            <ImageRotateWarning />
            <ImageSkeleton />
          </ImagePlaceholder>
        </Image>
      </ImageFigure>

      <div className="flex gap-12 my-8">
        {sections.map((section: Section, index) => (
          <span className="uppercase" key={index}>
            <h3 className="font-black uppercase text-xs">{section.heading}</h3>
            {section.value}
          </span>
        ))}
      </div>
      <p className="mb-4 last:mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p className="mb-4 last:mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p className="mb-4 last:mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p className="mb-4 last:mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </Article>
  );
}
