import type { Album } from '@/types';
import { Ui } from '@/ui';

import Map from './map';

type Props = {
  album?: Album;
  isInView: boolean;
  onAlbum: () => void;
  onNotes: () => void;
};

export default function Cover({
  album,
  isInView,
  onAlbum,
  onNotes,
}: Props) {
  if (!album) {
    return null;
  }

  return (
    <>
      <Ui.Templates.Header canRender={isInView}>
        <Ui.Templates.Link id={album.id} onClick={onAlbum}>
          <Ui.Templates.Icon icon="LayoutDashboard" />
          <Ui.Templates.Content>
            <Ui.Templates.Label>Album</Ui.Templates.Label>
            {album.title} <Ui.Templates.LinkExternalIcon />
          </Ui.Templates.Content>
        </Ui.Templates.Link>
      </Ui.Templates.Header>
      <Ui.Templates.List>
        <Ui.Templates.ListItem canRender={isInView} index={1}>
          <Ui.Templates.Icon icon="Bookmark" />
          <Ui.Templates.Content>
            <Ui.Templates.Label>Category</Ui.Templates.Label>
            {album.category}
          </Ui.Templates.Content>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={2}>
          <Ui.Templates.Icon icon="Flag" />
          <Ui.Templates.Content>
            <Ui.Templates.Label>Location</Ui.Templates.Label>
            {album.location}
          </Ui.Templates.Content>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={3}>
          <Ui.Templates.Icon icon="Globe" />
          <Ui.Templates.Content>
            <Ui.Templates.Label>Latitude, Longitude</Ui.Templates.Label>
            {album.coordinates}
          </Ui.Templates.Content>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={4}>
          <Ui.Templates.Icon icon="Calendar1" />
          <Ui.Templates.Content>
            <Ui.Templates.Label>When</Ui.Templates.Label>
            {album.when}
          </Ui.Templates.Content>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={5}>
          <Ui.Templates.Icon icon="GalleryVerticalEnd" />
          <Ui.Templates.Content>
            <Ui.Templates.Label>Images</Ui.Templates.Label>
            {album.images.length}
          </Ui.Templates.Content>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={6}>
          <Ui.Templates.Icon icon="Pen" />
          <Ui.Templates.Content>
            <Ui.Templates.Label>Notes</Ui.Templates.Label>
            <Ui.Templates.Preview
              label="View more notes"
              onToggle={onNotes}
            >
              {album.notes[0]}
            </Ui.Templates.Preview>
          </Ui.Templates.Content>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canFloat canRender={isInView} index={7}>
          <Ui.Templates.Content>
            <Map position={album.position} />
          </Ui.Templates.Content>
        </Ui.Templates.ListItem>
      </Ui.Templates.List>
    </>
  );
}
