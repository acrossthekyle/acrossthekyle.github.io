import './DetailsToggle.scss';

import React from 'react';

export function DetailsToggle() {
	return (
		<>
			<input
				id="trips-details-input"
				type="checkbox"
			/>
			<label
				id="trips-details-toggle"
				htmlFor="trips-details-input"
				tabIndex={0}
				role="button"
				aria-label="view more details about thru-hike"
			>
				<span aria-hidden="true">More</span>
				<span className="arrow" aria-hidden="true" />
				<span className="arrow" aria-hidden="true" />
			</label>
		</>
  );
}
