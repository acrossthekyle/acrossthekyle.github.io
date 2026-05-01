'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';
import { useSize } from '@/hooks/useSize';
import { useView } from '@/hooks/useView';
import type { Album, Data } from '@/types';
import { Ui } from '@/ui';

import Cover from './cover';
import Details from './details';

type Props = {
  data?: {
    album?: Album;
    image?: Data;
  };
};

export default function Template({ data }: Props) {
  const [isViewingNotes, setIsViewingNotes] = useState(false);
  const [isRenderingDetails, setIsRenderingDetails] = useState(false);

  const { onClose, onDone, onStack } = useDialog();
  const { onFilter } = useFilter();
  const { onSize, size } = useSize();
  const { onView, view } = useView();

  const [inViewRef, isInView] = useInView({
    threshold: 0,
  });

  const handleOnDone = () => {
    setIsViewingNotes(false);
    setIsRenderingDetails(false);

    onSize('reset');
  };

  const handleOnNotes = () => {
    setIsViewingNotes(previous => !previous);
  };

  const handleOnDetails = () => {
    setIsRenderingDetails((isActive: boolean) => {
      if (isActive) {
        setIsViewingNotes(false);
      }

      return !isActive
    });
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isViewingNotes) {
          handleOnNotes();
        }

        if (isRenderingDetails && !isViewingNotes) {
          handleOnDetails();
        }
      }
    };

    onStack(isRenderingDetails || isViewingNotes);

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isRenderingDetails, isViewingNotes, onStack]);

  useEffect(() => {
    onDone(() => {
      handleOnDone();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onDone, isRenderingDetails, isViewingNotes, size]);

  const handleOnAlbum = (id: string) => {
    onFilter('album', id, view);

    onClose();

    onView('library');
  };

  const handleOnClose = () => {
    onClose();
  };

  if (!data) {
    return null;
  }

  const isCover = (data?.album && data?.image === undefined);
  const isDetails = (data?.album && data?.image !== undefined);
  const notes = isCover
    ? data?.album?.notes
    : (Array.isArray(data?.image?.notes) ? data?.image?.notes : [data?.image?.notes || '']);

  return (
    <>
      <Ui.Templates.Figure>
        <Ui.Templates.FigureImage
          src={data?.image === undefined ? data?.album?.cover : data?.image?.src}
        />
        {size !== 'full' && (
          <Ui.Templates.FigureCaption>
            <Ui.Templates.Content
              canRender={isRenderingDetails}
              inViewRef={inViewRef}
              onClose={handleOnDetails}
            >
              {isCover && (
                <Cover
                  album={data?.album}
                  isInView={isInView}
                  onAlbum={handleOnAlbum}
                  onNotes={handleOnNotes}
                />
              )}
              {isDetails && (
                <Details
                  album={data?.album}
                  image={data?.image}
                  isInView={isInView}
                  onAlbum={handleOnAlbum}
                  onNotes={handleOnNotes}
                />
              )}
            </Ui.Templates.Content>
          </Ui.Templates.FigureCaption>
        )}
        <Ui.Templates.Toggles
          isActive={isRenderingDetails}
          onClose={handleOnClose}
          onToggle={handleOnDetails}
        />
      </Ui.Templates.Figure>
      <Ui.Templates.Notes
        isActive={isViewingNotes}
        notes={notes}
        onToggle={handleOnNotes}
      />
    </>
  );
}
