import { Suspense } from 'react';

import {
  Image,
  ImageCaption,
  ImageCaptionEyebrow,
  ImageCaptionText,
  ImageFigure,
  ImageLink,
} from '@/ui/stage';
import Loading from '@/ui/loading';
import { Map, MapMarker } from '@/ui/map';
import { turnStringIntoArrayForList } from '@/utils';

import get from './get';
import Stat from './stat';
import { getStageTitle } from './utils';

type Params = Promise<{
  slug: string;
}>;

type Props = {
  params: Params;
};

export default async function Layout({ children, params }: React.PropsWithChildren<Props>) {
  const { slug } = await params;

  const data = get(slug);

  return (
    <Suspense fallback={<Loading />}>
      <div className="lg:flex-1 lg:h-dvh p-6 xl:p-12 lg:overflow-y-scroll bg-(--foreground) text-(--background)">
        <div className="flex flex-col justify-between w-full mb-6 lg:flex-row">
          <div>
            <h1 className="uppercase leading-[0.775] text-7xl font-black font-stretch-ultra-condensed tracking-tight">
              <span className="block mb-1 leading-[0.775] font-stretch-expanded tracking-wide text-tiny">
                {data.type}
              </span>
              {turnStringIntoArrayForList(data.title).map((chunk, index: number) => (
                <span className="block lg:hidden" key={index}>{chunk}</span>
              ))}
              <span className="block mt-2.5 mb-1.5 leading-[0.775] font-stretch-condensed tracking-normal text-lg lg:text-4xl lg:mt-0">
                {data.location}
              </span>
              <span className="block leading-[0.775] font-stretch-condensed tracking-wide text-lg font-black lg:font-black lg:text-base">
                {data.year}
              </span>
            </h1>
            <ul className="flex gap-12 my-6">
              {data.stats.map((stat) => (
                <li key={stat.label}>
                  <Stat { ...stat } />
                </li>
              ))}
            </ul>
          </div>
          <Map>
            <MapMarker position={data.position} />
          </Map>
        </div>
        <p className="mb-6 lg:mb-12 font-medium">{data.description}</p>
        <ul className="flex flex-col gap-6 lg:gap-12">
          {data.stages.map(({ date, index, image, title }) => (
            <li key={index}>
              <ImageFigure>
                <Image
                  alt=""
                  height={1080}
                  index={index}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={image}
                  width={1920}
                />
                <ImageCaption>
                  <ImageLink
                    href={`/trails/${data.slug}/${index}`}
                  >
                    <ImageCaptionEyebrow>
                      {date}
                    </ImageCaptionEyebrow>
                    <ImageCaptionText>
                      {turnStringIntoArrayForList(getStageTitle(title)).map((chunk, key: number) => (
                        <span className="block" key={key}>
                          {chunk}
                        </span>
                      ))}
                    </ImageCaptionText>
                  </ImageLink>
                </ImageCaption>
              </ImageFigure>
            </li>
          ))}
        </ul>
        {children}
      </div>
    </Suspense>
  );
}
