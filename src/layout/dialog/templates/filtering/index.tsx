'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useDialog } from '@/hooks/useDialog';
import type { Album } from '@/types';
import { Ui } from '@/ui';

import Category from './category';
import Cover from './cover';

type Props = {
  data?: {
    album?: Album;
    category?: {
      albums: number;
      images: number;
      label: string;
    };
  };
};

export default function Template({ data }: Props) {
  const [isViewingNotes, setIsViewingNotes] = useState(false);

  const { onClose, onDone, onStack } = useDialog();

  const [inViewRef, isInView] = useInView({
    threshold: 0,
  });

  const handleOnDone = () => {
    setIsViewingNotes(false);
  };

  const handleOnNotes = () => {
    setIsViewingNotes(previous => !previous);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isViewingNotes) {
          handleOnNotes();
        } else {
          onClose();
        }
      }
    };

    onStack(isViewingNotes);

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isViewingNotes, onClose, onStack]);

  useEffect(() => {
    onDone(() => {
      handleOnDone();
    });
  }, [onDone, isViewingNotes]);

  if (!data) {
    return null;
  }

  const isAlbum = data?.category === undefined;
  const isCategory = data?.category !== undefined;

  return (
    <>
      <Ui.Templates.Content
        canRender
        inViewRef={inViewRef}
        isCentered
        onClose={onClose}
      >
        {isAlbum && (
          <Cover
            album={data?.album}
            isInView={isInView}
            onNotes={handleOnNotes}
          />
        )}
        {isCategory && (
          <Category
            albums={data?.category?.albums}
            images={data?.category?.images}
            isInView={isInView}
            label={data?.category?.label}
          />
        )}
      </Ui.Templates.Content>
      {isAlbum && (
        <Ui.Templates.Notes
          isActive={isViewingNotes}
          notes={data?.album?.notes}
          onToggle={handleOnNotes}
        />
      )}
    </>
  );
}
