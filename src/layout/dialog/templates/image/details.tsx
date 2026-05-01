'use client';

import { useFilter } from '@/hooks/useFilter';
import type { Album, Data } from '@/types';
import { Ui } from '@/ui';

type Props = {
  album?: Album;
  image?: Data;
  isInView: boolean;
  onAlbum: (id: string) => void;
  onNotes: () => void;
};

export default function Details({
  album,
  image,
  isInView,
  onAlbum,
  onNotes,
}: Props) {
  const { filterType, isFiltering } = useFilter();

  if (!album || !image) {
    return null;
  }

  return (
    <>
      <Ui.Templates.Header canRender={isInView}>
        <Ui.Templates.Icon icon="Type" />
        <Ui.Templates.Block>
          <Ui.Templates.Label>Title</Ui.Templates.Label>
          {image.title}
        </Ui.Templates.Block>
      </Ui.Templates.Header>
      <Ui.Templates.List>
        <Ui.Templates.ListItem canRender={isInView} index={1}>
          {isFiltering && filterType === 'album' ? (
            <>
              <Ui.Templates.Icon icon="LayoutDashboard" />
              <Ui.Templates.Block>
                <Ui.Templates.Label>Album</Ui.Templates.Label>
                {album.title}
              </Ui.Templates.Block>
            </>
          ) : (
            <Ui.Templates.Link onClick={() => onAlbum(album.id)}>
              <Ui.Templates.Icon icon="LayoutDashboard" />
              <Ui.Templates.Block>
                <Ui.Templates.Label>Album</Ui.Templates.Label>
                {album.title} <Ui.Templates.LinkExternalIcon />
              </Ui.Templates.Block>
            </Ui.Templates.Link>
          )}
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={2}>
          <Ui.Templates.Icon icon="Flag" />
          <Ui.Templates.Block>
            <Ui.Templates.Label>Location</Ui.Templates.Label>
            {image.location}
          </Ui.Templates.Block>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={3}>
          <Ui.Templates.Icon icon="Calendar1" />
          <Ui.Templates.Block>
            <Ui.Templates.Label>Taken on</Ui.Templates.Label>
            {image.date}
          </Ui.Templates.Block>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={4}>
          <Ui.Templates.Icon icon="ArrowUpFromDot" />
          <Ui.Templates.Block>
            <Ui.Templates.Label>Elevation</Ui.Templates.Label>
            <Ui.Units.Length isSmall value={image.elevation} />
          </Ui.Templates.Block>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={5}>
          <Ui.Templates.Icon icon="Camera" />
          <Ui.Templates.Block>
            <Ui.Templates.Label>Camera</Ui.Templates.Label>
            {image.exif.camera}
          </Ui.Templates.Block>
        </Ui.Templates.ListItem>
        {!!image.notes && (
          <Ui.Templates.ListItem canRender={isInView} index={6}>
            <Ui.Templates.Icon icon="Pen" />
            <Ui.Templates.Block>
              <Ui.Templates.Label>Notes</Ui.Templates.Label>
              <Ui.Templates.Preview
                label="View more notes"
                onToggle={onNotes}
              >
                {image.notes}
              </Ui.Templates.Preview>
            </Ui.Templates.Block>
          </Ui.Templates.ListItem>
        )}
      </Ui.Templates.List>
    </>
  );
}
