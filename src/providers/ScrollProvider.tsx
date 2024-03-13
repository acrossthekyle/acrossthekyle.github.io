import React, {  useCallback } from 'react';

import { Contexts } from '../contexts';

type Props = {
  children: React.ReactNode;
};

export function ScrollProvider({ children }: Props) {
  const scrollTripsIntoView = useCallback(() => {
    const introduction = document.getElementById('introduction');
    const content = document.getElementById('content');

    if (introduction && content) {
      if (!introduction.classList.contains('destroy')) {
        document.body.classList.toggle('scrolled');

        introduction.classList.toggle('destroy');
        content.classList.toggle('create');
      }
    }
  }, []);

  const toggleScrollSnaping = (bool: boolean) => {
    document.getElementById('main')!.classList.toggle('no-snap', bool);
  };

  return (
    <Contexts.ScrollContext.Provider
      value={{
        scrollTripsIntoView,
        toggleScrollSnaping
      }}
    >
      {children}
    </Contexts.ScrollContext.Provider>
  );
};
