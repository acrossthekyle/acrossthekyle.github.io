import type { Album } from '@/types';
import { Ui } from '@/ui';

type Props = {
  album?: Album;
  isInView: boolean;
  onAlbum: (id: string) => void;
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
        <Ui.Templates.Link onClick={() => onAlbum(album.id)}>
          <Ui.Templates.Icon icon="LayoutDashboard" />
          <Ui.Templates.Block>
            <Ui.Templates.Label>Album</Ui.Templates.Label>
            {album.title} <Ui.Templates.LinkExternalIcon />
          </Ui.Templates.Block>
        </Ui.Templates.Link>
      </Ui.Templates.Header>
      <Ui.Templates.List>
        <Ui.Templates.ListItem canRender={isInView} index={1}>
          <Ui.Templates.Icon icon="Bookmark" />
          <Ui.Templates.Block>
            <Ui.Templates.Label>Category</Ui.Templates.Label>
            {album.category}
          </Ui.Templates.Block>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={2}>
          <Ui.Templates.Icon icon="Flag" />
          <Ui.Templates.Block>
            <Ui.Templates.Label>Location</Ui.Templates.Label>
            {album.location}
          </Ui.Templates.Block>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={3}>
          <Ui.Templates.Icon icon="Globe" />
          <Ui.Templates.Block>
            <Ui.Templates.Label>Latitude, Longitude</Ui.Templates.Label>
            {album.coordinates}
          </Ui.Templates.Block>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={4}>
          <Ui.Templates.Icon icon="Calendar1" />
          <Ui.Templates.Block>
            <Ui.Templates.Label>When</Ui.Templates.Label>
            {album.when}
          </Ui.Templates.Block>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={5}>
          <Ui.Templates.Icon icon="GalleryVerticalEnd" />
          <Ui.Templates.Block>
            <Ui.Templates.Label>Images</Ui.Templates.Label>
            {album.images.length}
          </Ui.Templates.Block>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={6}>
          <Ui.Templates.Icon icon="Pen" />
          <Ui.Templates.Block>
            <Ui.Templates.Label>Notes</Ui.Templates.Label>
            <Ui.Templates.Preview
              label="View more notes"
              onToggle={onNotes}
            >
              {album.notes[0]}
            </Ui.Templates.Preview>
          </Ui.Templates.Block>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canFloat canRender={isInView} index={7}>
          <Ui.Templates.Block>
            <Ui.Map position={album.position} />
          </Ui.Templates.Block>
        </Ui.Templates.ListItem>
      </Ui.Templates.List>
    </>
  );
}
