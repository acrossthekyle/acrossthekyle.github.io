import './Trips.scss';

import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

import { TRIPS } from '../../../trips';
import { Trip } from '../../../types';

import { TripsComponents } from './components';

export function Trips() {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleOnInViewChange = (inView: boolean, index: number) => {
		if (inView) {
			setCurrentIndex(index);
		}
	};

	return (
		<>
			<section id="trips" role="listbox">
				{TRIPS.map((trip: Trip, index: number) => (
					<InView
	    		  key={trip.id}
	    		  onChange={(inView: boolean) => handleOnInViewChange(inView, index)}
	    		  threshold={.75}
	    		>
	    			{({ inView, ref }) => (
	    				<section
	    					id={trip.id}
	    					className="section"
	    					data-current={index === currentIndex}
	    					ref={ref}
	    					role="option"
	    					aria-label={`${trip.title.join(' ')}`}
	    					aria-selected={index === currentIndex}
	    				>
	    					<TripsComponents.Trip index={index} trip={trip} />
	    				</section>
						)}
				  </InView>
				))}
			</section>
			<TripsComponents.Navigation current={currentIndex} />
			<TripsComponents.Details current={currentIndex} />
		</>
  );
}
