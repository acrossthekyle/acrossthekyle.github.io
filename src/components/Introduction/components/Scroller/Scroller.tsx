import './Scroller.scss';

import React, { useContext } from 'react';

import { ScrollContext } from '../../../../contexts/ScrollContext';

import { ScrollerIcon } from './ScrollerIcon';

let lastScrollTop = 0;

export function Scroller() {
  const { scrollTripsIntoView } = useContext(ScrollContext);

  const handleOnScroll = (event: React.UIEvent<HTMLElement>) => {
    const element = document.getElementById('scroller');

    element!.classList.toggle('fade', element!.scrollTop > 0);

    if (element!.scrollTop < lastScrollTop){
      return;
    }

    lastScrollTop = element!.scrollTop <= 0 ? 0 : element!.scrollTop;

    if (element!.scrollTop + element!.offsetHeight >= element!.scrollHeight ) {
      setTimeout(() => {
        scrollTripsIntoView();
      }, 1200);
    }
  };

  return (
    <div id="scroller" onScroll={handleOnScroll}>
      <div>
        <span>Scroll for hikes</span>
        <ScrollerIcon />
      </div>
    </div>
  );
}
