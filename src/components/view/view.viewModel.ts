'use client';

import { useContext, useEffect, useState } from 'react';

type Return = {
  handleOnCloseSearch: () => void;
  handleOnOpenSearch: () => void;
  isSearching: boolean;
};

export const useViewModel = (): Return => {
  const [isSearching, setIsSearching] = useState(false);

  const handleOnOpenSearch = () => {
    setIsSearching(true);

    setTimeout(() => {
      document.getElementById('search-input').focus();
    }, 250);
  };

  const handleOnCloseSearch = () => {
    setTimeout(() => {
      document.getElementById('searchOpen').focus();
    }, 250);

    setIsSearching(false);
  };

  return {
    handleOnCloseSearch,
    handleOnOpenSearch,
    isSearching,
  };
};

export default function Node() {
  return null;
}
