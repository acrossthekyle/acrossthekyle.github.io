import React, { useContext } from 'react';

import { ScrollContext } from '../../../../contexts/ScrollContext';
import { TRIPS_BY_YEAR } from '../../../../trips';

type Props = {
  onClick: () => void;
};

export function Backpacking({ onClick }: Props) {
  const { toggleScrollSnaping, scrollTripsIntoView } = useContext(ScrollContext);

  const handleOnTripClick = (id: string) => {
  	toggleScrollSnaping(true);

  	scrollTripsIntoView();

    setTimeout(() => {
    	document.getElementById(id)!.scrollIntoView();

		  toggleScrollSnaping(false);

		  onClick();
    }, 500);
  };

	return (
  	<>
    	{TRIPS_BY_YEAR.map(({ year, trips }) => (
    		<React.Fragment key={year}>
      		<h4>{year}</h4>
      		<ul>
      			{trips.map(({ countries, id, title }) => (
      				<li key={id}>
      					<button
									aria-label={`go to ${title.join(' ')}`}
      				    onClick={() => handleOnTripClick(id)}
      				  	title={`Go to ${title.join(' ')}`}
      				  	type="button"
      				  >
      				  	{title.join(' ')}
      				  </button>
		          </li>
      			))}
          </ul>
        </React.Fragment>
    	))}
  	</>
	);
}
