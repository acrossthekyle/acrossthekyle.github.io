import { createContext } from 'react';

export const ScrollContext = createContext({
	scrollTripsIntoView: () => {},
  toggleScrollSnaping: (bool: boolean) => {}
});
