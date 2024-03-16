import './Trip.scss';

import React from 'react';

import { Trip as TripType } from '../../../../../types';
import { toggleCheckbox } from '../../../../../utils';

type Props = {
	index: number;
	trip: TripType;
};

export function Trip({ index, trip }: Props) {
	const handleOnClick = () => {
		toggleCheckbox('trips-details-input', true);
	};

	return (
		<>
			<figure>
				<div className="background blurred" style={{ backgroundImage: `url(${trip.image})` }} aria-hidden="true" />
				<button onClick={handleOnClick}>
					<div className="background" style={{ backgroundImage: `url(${trip.image})` }} aria-hidden="true" />
			  	<figcaption>
			  		<span className="location">
		  				{[
		  					(trip.mountains ?? []).join('/'),
		  					trip.countries.join('/'),
		  				].filter(Boolean).join(', ')}
					  </span>
					  {trip.title.map((word: string) => (
					  	<span className="title" key={word}>
					  		{word}
					  	</span>
					  ))}
			  		<span className="stats">
					  	{trip.miles && `${trip.miles} miles, `}{trip.days} days
					  </span>
			  	</figcaption>
		  	</button>
		  </figure>
		  <span className="number" aria-hidden="true">
		  	{index > 9 ? index : `0${index + 1}`}.
		  </span>
		</>
  );
}
