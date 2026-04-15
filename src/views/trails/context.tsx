'use client';

import { createContext, useState } from 'react';

export const TrailContext = createContext({
  id: null,
  // eslint-disable-next-line unused-imports/no-unused-vars
  onHover: (id: string | null) => {
    // noop
  },
});

export default function Context({ children }: React.PropsWithChildren) {
  const [id, setId] = useState<string | null>(null);

  const handleOnHover = (id: string | null) => {
    setId(id);
  };

  return (
    <TrailContext.Provider
      value={{
        id: id as null,
        onHover: handleOnHover,
      }}
    >
      {children}
    </TrailContext.Provider>
  );
};
