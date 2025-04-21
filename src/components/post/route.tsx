'use client';

import dynamic from 'next/dynamic';

const RouteMap = dynamic(() => import('./route.map'), {
  ssr: false,
});

function Route(props) {
  return <RouteMap {...props} />;
}

export default Route;
