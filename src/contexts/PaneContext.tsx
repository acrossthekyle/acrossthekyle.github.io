import { createContext } from 'react';

export const PaneContext = createContext({
  isPaneOpen: false,
  togglePane: (value: boolean) => {}
});
