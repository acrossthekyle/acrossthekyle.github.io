import type { Album, Data } from '@/types';
import { Ui } from '@/ui';

type Props = {
  album?: Album;
  image?: Data;
  isInView: boolean;
  onAlbum: () => void;
  onNotes: () => void;
};

export default function Details({
  album,
  image,
  isInView,
  onAlbum,
  onNotes,
}: Props) {
  if (!album || !image) {
    return null;
  }

  return (
    <>
      <Ui.Templates.Header canRender={isInView}>
        <Ui.Templates.Icon icon="Type" />
        <Ui.Templates.Content>
          <Ui.Templates.Label>Title</Ui.Templates.Label>
          {image.title}
        </Ui.Templates.Content>
      </Ui.Templates.Header>
      <Ui.Templates.List>
        <Ui.Templates.ListItem canRender={isInView} index={1}>
          <Ui.Templates.Link id={album.id} onClick={onAlbum}>
            <Ui.Templates.Icon icon="LayoutDashboard" />
            <Ui.Templates.Content>
              <Ui.Templates.Label>Album</Ui.Templates.Label>
              {album.title} <Ui.Templates.LinkExternalIcon />
            </Ui.Templates.Content>
          </Ui.Templates.Link>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={2}>
          <Ui.Templates.Icon icon="Flag" />
          <Ui.Templates.Content>
            <Ui.Templates.Label>Location</Ui.Templates.Label>
            {image.location}
          </Ui.Templates.Content>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={3}>
          <Ui.Templates.Icon icon="Calendar1" />
          <Ui.Templates.Content>
            <Ui.Templates.Label>Taken on</Ui.Templates.Label>
            {image.date}
          </Ui.Templates.Content>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={4}>
          <Ui.Templates.Icon icon="ArrowUpFromDot" />
          <Ui.Templates.Content>
            <Ui.Templates.Label>Elevation</Ui.Templates.Label>
            <Ui.Units.Length isSmall value={image.elevation} />
          </Ui.Templates.Content>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={5}>
          <Ui.Templates.Icon icon="Camera" />
          <Ui.Templates.Content>
            <Ui.Templates.Label>Camera</Ui.Templates.Label>
            {image.exif.camera}
          </Ui.Templates.Content>
        </Ui.Templates.ListItem>
        {!!image.notes && (
          <Ui.Templates.ListItem canRender={isInView} index={6}>
            <Ui.Templates.Icon icon="Pen" />
            <Ui.Templates.Content>
              <Ui.Templates.Label>Notes</Ui.Templates.Label>
              <Ui.Templates.Preview
                label="View more notes"
                onToggle={onNotes}
              >
                {image.notes}
              </Ui.Templates.Preview>
            </Ui.Templates.Content>
          </Ui.Templates.ListItem>
        )}
      </Ui.Templates.List>
    </>
  );
}
