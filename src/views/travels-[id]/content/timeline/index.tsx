import tw from '@/styles';
import type { Timeline as TimelineType } from '@/types';

import {
  List,
  ListItem,
  ListItemContent,
  ListItemContentStats,
  ListItemContentStatsStat,
  ListItemContentTitle,
  ListItemLabel,
} from './components';
import { title } from './utils';

type Props = {
  timeline?: TimelineType[];
};

export default function Timeline({ timeline }: Props) {
  if (!timeline) {
    return null;
  }

  return (
    <article aria-label="timeline" className={styles.container} id="timeline">
      <List>
        {timeline.map((point, index) => (
          <ListItem key={index}>
            <ListItemLabel>{point.label}</ListItemLabel>
            <ListItemContent>
              <ListItemContentTitle value={title(point.title)}>
                <ListItemContentStatsStat
                  type="elevation"
                  value={point.data?.elevation}
                />
              </ListItemContentTitle>
              {point.data !== undefined && (
                <ListItemContentStats>
                  <ListItemContentStatsStat
                    type="distance"
                    value={point.data?.distance}
                  />
                  <ListItemContentStatsStat
                    type="time"
                    value={point.data?.time}
                  />
                  <ListItemContentStatsStat
                    type="gain"
                    value={point.data?.gain}
                  />
                  <ListItemContentStatsStat
                    type="loss"
                    value={point.data?.loss}
                  />
                </ListItemContentStats>
              )}
            </ListItemContent>
          </ListItem>
        ))}
      </List>
    </article>
  );
};

const styles = tw({
  container: `
    px-6 py-2
  `,
});
