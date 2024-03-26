'use client'

import { createContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export const TravelContext = createContext({
  renderInfo: false,
  renderStats: false,
  toggleInfo: () => {},
  toggleStats: () => {}
});

export function TravelProvider({ children }: Props) {
  const [renderInfo, setRenderInfo] = useState(false);
  const [renderStats, setRenderStats] = useState(false);

  const toggleInfo = (bool?: boolean) => {
  	setRenderInfo(typeof bool === 'boolean' && bool !== undefined ? bool : !renderInfo);
    setRenderStats(false);
  };

  const toggleStats = (bool?: boolean) => {
  	setRenderInfo(false);
    setRenderStats(typeof bool === 'boolean' && bool !== undefined ? bool : !renderStats);
  };

  return (
    <TravelContext.Provider
    	value={{
        renderInfo,
        renderStats,
    		toggleInfo,
    		toggleStats,
    	}}
    >
      {children}
    </TravelContext.Provider>
  );
}
