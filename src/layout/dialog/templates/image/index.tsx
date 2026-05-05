'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { useDialog } from '@/hooks/useDialog';
import { useFilter } from '@/hooks/useFilter';
import { useSize } from '@/hooks/useSize';
import { useView } from '@/hooks/useView';
import type { Data } from '@/types';
import { Ui } from '@/ui';

import {
  Block,
  Content,
  Figure,
  FigureCaption,
  FigureImage,
  Header,
  Icon,
  Label,
  Link,
  LinkExternalIcon,
  List,
  ListItem,
  Notes,
  Preview,
  Toggles,
} from './components';

type Props = {
  data?: {
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

  const handleOnCollection = () => {
    if (!data?.image) {
      return;
    }

    onFilter(data.image.collection.id);

    onView('collection');

    onClose();

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  if (!data?.image) {
    return null;
  }

  return (
    <>
      <Figure>
        <FigureImage
          src={data.image.src}
          thumb={data.image.thumb}
        />
        {size !== 'full' && (
          <FigureCaption>
            <Content
              canRender={isRenderingDetails}
              inViewRef={inViewRef}
              onClose={handleOnDetails}
            >
              <Header canRender={isInView}>
                <Icon icon="Type" />
                <Block>
                  <Label>Title</Label>
                  {data.image.title}
                </Block>
              </Header>
              <List>
                <ListItem canRender={isInView} index={1}>
                  <Icon icon="Bookmark" />
                  <Block>
                    <Label>Category</Label>
                    {data.image.category}
                  </Block>
                </ListItem>
                <ListItem canRender={isInView} index={2}>
                  {view === 'collection' ? (
                    <>
                      <Icon icon="LayoutDashboard" />
                      <Block>
                        <Label>Collection</Label>
                        {data.image.collection.title}
                      </Block>
                    </>
                  ) : (
                    <Link onClick={handleOnCollection}>
                      <Icon icon="LayoutDashboard" />
                      <Block>
                        <Label>Collection</Label>
                        {data.image.collection.title} <LinkExternalIcon />
                      </Block>
                    </Link>
                  )}
                </ListItem>
                <ListItem canRender={isInView} index={3}>
                  <Icon icon="Flag" />
                  <Block>
                    <Label>Location</Label>
                    {data.image.location.region}, {data.image.location.country}
                  </Block>
                </ListItem>
                <ListItem canRender={isInView} index={4}>
                  <Icon icon="Calendar1" />
                  <Block>
                    <Label>Taken on</Label>
                    {data.image.when}
                  </Block>
                </ListItem>
                <ListItem canRender={isInView} index={5}>
                  <Icon icon="ArrowUpFromDot" />
                  <Block>
                    <Label>Elevation</Label>
                    <Ui.Units.Length isSmall value={data.image.elevation} />
                  </Block>
                </ListItem>
                <ListItem canRender={isInView} index={6}>
                  <Icon icon="Camera" />
                  <Block>
                    <Label>Camera</Label>
                    {data.image.camera}
                  </Block>
                </ListItem>
                {data.image.notes.length > 0 && (
                  <ListItem canRender={isInView} index={7}>
                    <Icon icon="Pen" />
                    <Block>
                      <Label>Notes</Label>
                      <Preview
                        label="View more notes"
                        onToggle={handleOnNotes}
                      >
                        {data.image.notes.join(' ')}
                      </Preview>
                    </Block>
                  </ListItem>
                )}
                <ListItem canFloat canRender={isInView} index={8}>
                  <Block>
                    <Ui.Map position={data.image.collection.position} />
                  </Block>
                </ListItem>
              </List>
            </Content>
          </FigureCaption>
        )}
        <Toggles
          isActive={isRenderingDetails}
          onToggle={handleOnDetails}
        />
      </Figure>
      {data.image.notes.length > 0 && (
        <Notes
          isActive={isViewingNotes}
          notes={data.image.notes}
          onToggle={handleOnNotes}
        />
      )}
    </>
  );
}
