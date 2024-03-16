import './Details.scss';

import React from 'react';
import { useSwipeable } from 'react-swipeable';

import { Images } from '../../../../../images';
import { TRIPS } from '../../../../../trips';
import { Trip, TripItinerary } from '../../../../../types';
import { formatDistance, toggleCheckbox } from '../../../../../utils';

import { DetailsToggle } from './DetailsToggle';

type Props = {
	current: number;
};

export function Details({ current }: Props) {
	const trip: Trip = TRIPS[current];

	const swipeable = useSwipeable({
		trackTouch: true,
  	trackMouse: true,
	  onSwipedRight: () => {
	  	toggleCheckbox('trips-details-input', false);

	  	setTimeout(() => {
	  		document.getElementById('trips-details-content')!.scrollTo(0, 0);
	  	}, 500);
	  },
	});

	return (
		<>
			<DetailsToggle />
			<section id="trips-details" {...swipeable}>
				<section id="trips-details-content">
				  <div>
			  		<h2>Trip Details</h2>
			  		<label
			  			htmlFor="trips-details-input"
			  			tabIndex={0}
			  			role="button"
			  			aria-label="close more details about thru-hike"
			  		/>
			  	</div>
			  	{trip.mapBackgroundUrl && trip.mapUrl && (
			  		<a
						  id="trips-details-map"
						  href={trip.mapUrl}
						  rel="noreferrer"
						  style={{ backgroundImage: `url(${trip.mapBackgroundUrl})` }}
						  target="_blank"
						  title="View on Google Maps"
						/>
			  	)}

					<a id="trips-details-gear" href={trip.gearLink} rel="noreferrer" target="_blank">
						Gear list on lighterpack.com <Images.External />
					</a>

					{(trip.itinerary || []).map((itinerary: TripItinerary, index: number) => (
						<article key={`${itinerary.start}-${itinerary.stop}`}>
							<h3>
								Day {index + 1} <span>&mdash;</span> {itinerary.miles} miles <span>({formatDistance(itinerary.miles * 1.609)} km)</span>
							</h3>
							<h4>
								<span className="start">
									{itinerary.start}
									{itinerary.startAltitudeFeet && (
										<span className="altitude">
										  {itinerary.startAltitudeFeet} ft
										  <br />
										  <span className="faded">({formatDistance(itinerary.startAltitudeFeet/3.281)} m)</span>
										</span>
									)}
							  </span>
							  <span className="arrow" aria-hidden="true">&rarr;</span>
							  <span className="end">
									{itinerary.stop}
									{itinerary.stopAltitudeFeet && (
										<span className="altitude">
											{itinerary.stopAltitudeFeet} ft
											<br />
											<span className="faded">({formatDistance(itinerary.stopAltitudeFeet/3.281)} m)</span>
										</span>
									)}
							  </span>
							</h4>
							{(itinerary.elevationGainFeet && itinerary.elevationLossFeet) && (
								<div className="elevation">
									<div className="up">
										<span>&#8593;</span> {itinerary.elevationGainFeet} ft <span>({formatDistance(itinerary.elevationGainFeet/3.281)} m)</span>
									</div>
									<div className="down">
										<span>&#8595;</span> {itinerary.elevationLossFeet} ft <span>({formatDistance(itinerary.elevationLossFeet/3.281)} m)</span>
									</div>
								</div>
							)}
							<div className="footer">
							  <div className="steps">
									{itinerary.steps} steps
								</div>
								{itinerary.tripActivityLink && (
									<a className="activity-link" href={itinerary.tripActivityLink} rel="noreferrer" target="_blank">
										Details on garmin.com <Images.External />
									</a>
								)}
							</div>
						</article>
					))}
				</section>
			</section>
		</>
  );
}
