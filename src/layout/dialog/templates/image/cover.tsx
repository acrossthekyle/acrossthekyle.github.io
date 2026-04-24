import type { Album } from '@/types';
import { Ui } from '@/ui';

import Map from './map';

type Props = {
  album: Album;
  isInView: boolean;
  isViewingNotes: boolean;
  onAlbum: () => void;
  onNotes: () => void;
};

export default function Cover({
  album,
  isInView,
  isViewingNotes,
  onAlbum,
  onNotes,
}: Props) {
  return (
    <>
      <Ui.Templates.Header canRender={isInView}>
        <Ui.Templates.Link href={`?a=${album.id}`} onClick={onAlbum}>
          <Ui.Templates.Icon icon="LayoutDashboard" />
          <Ui.Templates.Content>
            <Ui.Templates.Label>Album Name</Ui.Templates.Label>
            {album.title} <Ui.Templates.LinkExternalIcon />
          </Ui.Templates.Content>
        </Ui.Templates.Link>
      </Ui.Templates.Header>
      <Ui.Templates.List>
        {!isViewingNotes && (
          <>
            <Ui.Templates.ListItem
              canRender={isInView}
              index={1}
            >
              <Ui.Templates.Icon icon="Bookmark" />
              <Ui.Templates.Content>
                <Ui.Templates.Label>Category</Ui.Templates.Label>
                {album.category}
              </Ui.Templates.Content>
            </Ui.Templates.ListItem>
            <Ui.Templates.ListItem
              canRender={isInView}
              index={2}
            >
              <Ui.Templates.Icon icon="Flag" />
              <Ui.Templates.Content>
                <Ui.Templates.Label>Location</Ui.Templates.Label>
                {album.location}
              </Ui.Templates.Content>
            </Ui.Templates.ListItem>
            <Ui.Templates.ListItem
              canRender={isInView}
              index={3}
            >
              <Ui.Templates.Icon icon="Globe" />
              <Ui.Templates.Content>
                <Ui.Templates.Label>Latitude, Longitude</Ui.Templates.Label>
                {album.coordinates}
              </Ui.Templates.Content>
            </Ui.Templates.ListItem>
            <Ui.Templates.ListItem
              canRender={isInView}
              index={4}
            >
              <Ui.Templates.Icon icon="Calendar1" />
              <Ui.Templates.Content>
                <Ui.Templates.Label>When</Ui.Templates.Label>
                {album.when}
              </Ui.Templates.Content>
            </Ui.Templates.ListItem>
            <Ui.Templates.ListItem
              canRender={isInView}
              index={5}
            >
              <Ui.Templates.Icon icon="GalleryVerticalEnd" />
              <Ui.Templates.Content>
                <Ui.Templates.Label>Images</Ui.Templates.Label>
                {album.images.length}
              </Ui.Templates.Content>
            </Ui.Templates.ListItem>
          </>
        )}
        <Ui.Templates.ListItem
          canRender={isInView}
          index={6}
        >
          <Ui.Templates.Icon icon="Pencil" />
          <Ui.Templates.ListItemNotes
            isActive={isViewingNotes}
            onToggle={onNotes}
          >
            <Ui.Templates.Content>
              <Ui.Templates.Label>Field Notes</Ui.Templates.Label>
              {(isViewingNotes ? album.notes : [album.notes[0]]).map((paragraph: string) => (
                <Ui.Templates.ListItemNotesParagraph
                  key={paragraph}
                  truncate={!isViewingNotes}
                >
                  {paragraph}
                </Ui.Templates.ListItemNotesParagraph>
              ))}
            </Ui.Templates.Content>
          </Ui.Templates.ListItemNotes>
        </Ui.Templates.ListItem>
      </Ui.Templates.List>
      <Map canRender={isInView} index={7} position={album.position} />
    </>
  );
}
