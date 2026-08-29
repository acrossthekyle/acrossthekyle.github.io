import type { Travel } from '@/types';

import {
  Item,
  ItemHeading,
  ItemList,
  ItemListItemAnchor,
  ItemListItemCategory,
  ItemListItemIcon,
  ItemListItemLocation,
  ItemListItemTitle,
} from './components';
import { organize } from './utils';

type Props = {
  filterBy: string;
  travels: Travel[];
};

export default function Items({ filterBy, travels }: Props) {
  return (
    <ul>
      {organize(travels, filterBy).map((item) => (
        <Item key={item[0]}>
          <ItemHeading>{item[0]}</ItemHeading>
          <ItemList>
            {item[1].map((travel) => (
              <li key={travel.id}>
                <ItemListItemAnchor id={travel.id}>
                  <ItemListItemTitle>{travel.title}</ItemListItemTitle>
                  <ItemListItemLocation
                    country={travel.country}
                    region={travel.region}
                  />
                  <ItemListItemCategory>{travel.category}</ItemListItemCategory>
                  <ItemListItemIcon />
                </ItemListItemAnchor>
              </li>
            ))}
          </ItemList>
        </Item>
      ))}
    </ul>
  );
};
