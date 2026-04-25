'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useDialog } from '@/hooks/useDialog';
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
  const [isRenderingDetails,  setIsRenderingDetails] = useState(false);

  const { onClose, onDone } = useDialog();
  const { onView } = useView();

  const [inViewRef, isInView] = useInView({
    threshold: 0,
  });

  const handleOnDone = () => {
    setIsViewingNotes(false);
    setIsRenderingDetails(false);
  };

  useEffect(() => {
    onDone(() => {
      handleOnDone();
    });
  }, [onDone, isRenderingDetails, isViewingNotes]);

  const handleOnAlbum = () => {
    onClose();

    onView('library');
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
  }

  const handleOnClose = () => {
    onClose();
  };

  if (!data) {
    return null;
  }

  return (
    <>
      <Ui.Templates.Figure>
        <Ui.Templates.FigureImage
          src={data?.image === undefined ? data?.album?.cover : data?.image?.src}
        />
        <Ui.Templates.FigureCaption
          canRender={isRenderingDetails}
          inViewRef={inViewRef}
        >
          {(data?.album && data?.image === undefined) && (
            <Cover
              album={data.album}
              isInView={isInView}
              isViewingNotes={isViewingNotes}
              onAlbum={handleOnAlbum}
              onNotes={handleOnNotes}
            />
          )}
          {(data?.album && data?.image !== undefined) && (
            <Details
              album={data.album}
              image={data.image}
              isInView={isInView}
              onAlbum={handleOnAlbum}
            />
          )}
        </Ui.Templates.FigureCaption>
      </Ui.Templates.Figure>
      <Ui.Templates.Toggles
        isActive={isRenderingDetails}
        onClose={handleOnClose}
        onToggle={handleOnDetails}
      />
    </>
  );
}
