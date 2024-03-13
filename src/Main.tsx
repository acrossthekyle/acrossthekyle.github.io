import './Main.scss';

import React from 'react';

import { MainComponents } from './components';
import { Providers } from './providers';

export function Main() {
  return (
    <Providers.ThemeProvider>
      <Providers.ScrollProvider>
        <MainComponents.Menu />
        <MainComponents.Introduction />
        <MainComponents.ContentComponents.Content>
          <MainComponents.ContentComponents.Trips />
        </MainComponents.ContentComponents.Content>
      </Providers.ScrollProvider>
    </Providers.ThemeProvider>
  );
}
