import { Ui } from '@/ui';

type Props = {
  albums?: number;
  images?: number;
  isInView: boolean;
  label?: string;
};

export default function Category({
  albums,
  images,
  isInView,
  label,
}: Props) {
  if (!albums || !images || !label) {
    return null;
  }

  return (
    <>
      <Ui.Templates.Header canRender={isInView}>
        <Ui.Templates.Icon icon="Type" />
        <Ui.Templates.Block>
          <Ui.Templates.Label>Category</Ui.Templates.Label>
          {label}
        </Ui.Templates.Block>
      </Ui.Templates.Header>
      <Ui.Templates.List>
        <Ui.Templates.ListItem canRender={isInView} index={1}>
          <Ui.Templates.Icon icon="GalleryVerticalEnd" />
          <Ui.Templates.Block>
            <Ui.Templates.Label>Images</Ui.Templates.Label>
            {images}
          </Ui.Templates.Block>
        </Ui.Templates.ListItem>
        <Ui.Templates.ListItem canRender={isInView} index={2}>
          <Ui.Templates.Icon icon="LayoutDashboard" />
          <Ui.Templates.Block>
            <Ui.Templates.Label>Albums</Ui.Templates.Label>
            {albums}
          </Ui.Templates.Block>
        </Ui.Templates.ListItem>
      </Ui.Templates.List>
    </>
  );
}
