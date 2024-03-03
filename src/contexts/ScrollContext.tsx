import { createContext } from 'react';

export const ScrollContext = createContext({
  canScroll: true,
  toggleCanScroll: () => {}
});
