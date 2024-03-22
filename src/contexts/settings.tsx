'use client'

import { createContext, useEffect, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

export const SettingsContext = createContext({
  isDarken: false,
  isImageless: false,
  isMonochrome: false,
  toggleDarken: () => {},
  toggleImageless: () => {},
  toggleMonochrome: () => {}
});

export function SettingsProvider({ children }: Props) {
  const [isDarken, setIsDarken] = useState(false);
  const [isImageless, setIsImageless] = useState(false);
  const [isMonochrome, setIsMonochrome] = useState(false);

  const handleKeyUp = (event: InputEvent) => {
    if (event.key.toLowerCase() === 'd') {
      toggleDarken();

      return;
    }

    if (event.key.toLowerCase() === 'i') {
      toggleImageless();

      return;
    }

    if (event.key.toLowerCase() === 'm') {
      toggleMonochrome();

      return;
    }
  };

  useEffect(() => {
    let shouldDarken = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (window.localStorage.acrossTheKyleDarken !== null) {
      shouldDarken = window.localStorage.acrossTheKyleDarken === 'true' ? true : false;
    }

    toggleDarken(shouldDarken);

    if (window.localStorage.acrossTheKyleImageless !== null) {
      setIsImageless(window.localStorage.acrossTheKyleImageless === 'true' ? true : false);
    }

    if (window.localStorage.acrossTheKyleMonochrome !== null) {
      setIsMonochrome(window.localStorage.acrossTheKyleMonochrome === 'true' ? true : false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [handleKeyUp]);

  const toggleDarken = (bool?: boolean) => {
    const shouldDarken = typeof bool === 'boolean' && bool !== undefined ? bool : !isDarken;

    setIsDarken(shouldDarken);

    document.body.classList.toggle('theme-dark', shouldDarken);
    document.body.classList.toggle('theme-light', !shouldDarken);

    window.localStorage.acrossTheKyleDarken = shouldDarken ? 'true' : 'false';
  };

  const toggleImageless = () => {
  	const shouldImageless = !isImageless;

    setIsImageless(shouldImageless);

    document.body.classList.toggle('settings-imageless', shouldImageless);

    window.localStorage.acrossTheKyleImageless = shouldImageless ? 'true' : 'false';
  };

  const toggleMonochrome = () => {
  	const shouldMonochrome = !isMonochrome;

    setIsMonochrome(shouldMonochrome);

    document.body.classList.toggle('settings-monochrome', shouldMonochrome);

    window.localStorage.acrossTheKyleMonochrome = shouldMonochrome ? 'true' : 'false';
  };

  return (
    <SettingsContext.Provider
    	value={{
        isDarken,
    		isImageless,
    		isMonochrome,
        toggleDarken,
    		toggleImageless,
    		toggleMonochrome,
    	}}
    >
      {children}
    </SettingsContext.Provider>
  );
}
