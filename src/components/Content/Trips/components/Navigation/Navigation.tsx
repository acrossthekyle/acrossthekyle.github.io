import './Navigation.scss';

import React from 'react';
import classNames from 'classnames';

import { TRIPS } from '../../../../../trips';

type Props = {
	current: number;
};

export function Navigation({ current }: Props) {
	const handleOnSelect = (id: string) => {
  	const element = document.getElementById(id);

	  if (element) {
	    element.scrollIntoView({
	    	behavior: 'smooth'
	    });
	  }
  };

	return (
		<nav id="trips-navigation" aria-label="thru-hikes">
			{TRIPS.map(({ id, title }, index: number) => (
				<button
				  className={classNames({ active: current === index })}
					key={id}
					onClick={() => handleOnSelect(id)}
					title={`Go to ${title.join(' ')}`}
					aria-current={index === current ? 'true' : 'false'}
					aria-label={`go to ${title.join(' ')}`}
				>
					<span>{title.join(' ')}</span>
				</button>
			))}
		</nav>
  );
}
