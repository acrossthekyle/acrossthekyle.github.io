'use client'

import { useContext, useEffect, useState } from 'react';

import { EventsContext } from 'contexts/events';
import { SettingsContext } from 'contexts/settings';
import { TravelContext } from 'contexts/travel';
import travels from 'data/travels';
import styles from 'scss/app/travels/travel/page.module.scss';
import { formatDistance, getTravelId, getTravelIdIndex } from 'utils';

export default function Page({ params }) {
  const travelId = getTravelId(params.id);
  const travelIdIndex = getTravelIdIndex(params.id);

  const travel = travels.find(({ id, year }) => id === travelId && String(year) === params.year);

  const [renderShare, setRenderShare] = useState(false);
  const [renderThumbnails, setRenderThumbnails] = useState(false);

  const { fireEvent } = useContext(EventsContext);
  const { isMetric } = useContext(SettingsContext);
  const {
    renderInfo,
    renderStats,
    toggleInfo,
    toggleStats
  } = useContext(TravelContext);

  useEffect(() => {
    return () => {
      toggleInfo(false);
      toggleStats(false);
      setRenderShare(false);
      setRenderThumbnails(false);
    };
  }, []);

  useEffect(() => {
    fireEvent(renderShare ? 'share' : '');
  }, [renderShare]);

  useEffect(() => {
    fireEvent(renderThumbnails ? 'thumbnails' : '');
  }, [renderThumbnails]);

  const handleOnThumbnailsClick = () => {
    setRenderShare(false);
    setRenderThumbnails(!renderThumbnails);
  };

  const handleOnShareClick = () => {
    setRenderShare(!renderShare);
    setRenderThumbnails(false);
  };

  const isThruHike = travel.type === 'thru-hikes';

  const info = isThruHike ? travel.itinerary[travelIdIndex - 1].info : travel.info;
  const stats = isThruHike ? travel.itinerary[travelIdIndex - 1].stats : travel.stats;

  return (
    <section className={styles.slot}>
      <div className={styles.content}>
        <div className={styles.info} data-active={renderInfo}>
          {info && info.map((segment) => (
            <p key={segment}>{segment}</p>
          ))}
        </div>

        <div className={styles.stats} data-active={renderStats}>
          {isThruHike && stats && (
            <>
              <div>
                <span>Distance</span>
                <span>{formatDistance(stats.miles, 'miles', isMetric)}</span>
              </div>
              <div>
                <span>Start</span>
                <span>
                  <span>
                  {stats.start}
                  </span>
                  <span>
                    {formatDistance(stats.startAltitudeFeet, 'feet', isMetric)}
                  </span>
                </span>
              </div>
              <div>
                <span>Stop</span>
                <span>
                  <span>
                  {stats.stop}
                  </span>
                  <span>
                    {formatDistance(stats.stopAltitudeFeet, 'feet', isMetric)}
                  </span>
                </span>
              </div>
              <div>
                <span>Elevation</span>
                <span>
                  <span>
                    &#8593; {formatDistance(stats.elevationGainFeet, 'feet', isMetric)}
                  </span>
                  <span>
                    &#8595; {formatDistance(stats.elevationLossFeet, 'feet', isMetric)}
                  </span>
                </span>
              </div>
              <div>
                <span>Steps</span>
                <span>
                  {stats.steps}
                </span>
              </div>
              {stats.tripActivityLink && (
                <div className={styles.gps}>
                  <a href={stats.tripActivityLink} rel="noreferrer" target="_blank">
                    GPS Data
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                    </svg>
                  </a>
                </div>
              )}
            </>
          )}

          {!isThruHike && stats && stats.map(({ key, value }) => (
            <p key={key}>{key}: {value}</p>
          ))}
        </div>
      </div>

      <div className={styles.options}>
        {stats && (
          <button
            data-active={renderStats}
            onClick={toggleStats}
            type="button"
          >
            Stats
          </button>
        )}
        {info && (
          <button
            data-active={renderInfo}
            onClick={toggleInfo}
            type="button"
          >
            Info
          </button>
        )}
        {isThruHike && (
          <button
            data-active={renderThumbnails}
            onClick={handleOnThumbnailsClick}
            type="button"
          >
            Thumbnails
          </button>
        )}
        <button
          data-active={renderShare}
          onClick={handleOnShareClick}
          type="button"
        >
          Share
        </button>
        {isThruHike && (
          <a href={travel.mapUrl} rel="noreferrer" target="_blank">
            Map
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
            </svg>
          </a>
        )}
        {isThruHike && (
          <a href={travel.gearLink} rel="noreferrer" target="_blank">
            Gear list
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
            </svg>
          </a>
        )}
        <div id="image-label">
          <span>{travel.title.join(' ')}</span>
          {isThruHike && (
            <span>{`${travelIdIndex}/${travel.itinerary.length}`}</span>
          )}
        </div>
      </div>
    </section>
  );
}
