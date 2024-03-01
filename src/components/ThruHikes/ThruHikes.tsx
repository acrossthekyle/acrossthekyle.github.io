import './ThruHikes.scss';

import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';

import { classNames, imageUrl } from '../../utils';
import { Components } from '../components';
import { THRU_HIKES } from './ThruHikes.constants';
import { ThruHike, ThruHikeStat } from './ThruHikes.types';

export function ThruHikes() {
	const [selectedImage, setSelectedImage] = useState<number | null>(null);
	const [isFullScreen, toggleIsFullScreen] = useState(false);

	const handleOnZoom = (index: number) => {
		setSelectedImage(index);
		toggleIsFullScreen(!isFullScreen);
	};

  return (
  	<section
  	  aria-label="backpacking"
  	  aria-orientation="horizontal"
  	  className="thru-hikes"
  	  role="listbox"
  	>
      <div className="introduction" id="introduction" role="option">
      	<div className="images">
		      <article
	      	  className="horizontal"
		        role="img"
		        style={{ backgroundImage: `url(${imageUrl('backpacking-1.jpeg', '1709072809903')})` }}
		      >
		        <figcaption>Grande Randonnée 20, Corsica, France</figcaption>
	      	</article>
	      	<article
	      	  className="vertical"
	      	  role="img"
	      	  style={{ backgroundImage: `url(${imageUrl('backpacking-2.jpeg', '1709072806325')})` }}
	      	>
	      		<figcaption>Annapurna Circuit, Nepal</figcaption>
	      	</article>
	      </div>
	      <div className="context">
	      	<h2>Backpacking</h2>
	      	<p>
	      	  I have been on numerous backpacking trips all over the world, from
	      	  the long-distance "Camino" walking trail in Spain to the heights of
	      	  the Himalayas in Nepal.
	      	</p>
	      </div>
      </div>

    	{THRU_HIKES.map((thruHike: ThruHike, index: number) => (
    		<InView key={thruHike.id} threshold={0.5}>
    			{({ inView, ref }) => (
		    		<div
		    		  className={classNames([
		    		  	'hike',
		    		  	isFullScreen && 'zoomed',
		    		  	((selectedImage === index && isFullScreen) || inView) && 'visible'
		    		  ])}
		    		  ref={ref}
		    		  role="option"
		    		>
		    		  <span aria-hidden="true" className="number">{index + 1}.</span>
		    		  <h3 className="title">{thruHike.title}</h3>
		    		  <p className="context">
		    		  	<span>
			    		  	{(thruHike.mountains ?? []).join('/')}
			    		  	{thruHike.mountains ? ', ' : ''}{thruHike.countries.join('/')}
		    		  	</span>
		    		  	<br />
		    		  	{thruHike.months.join(' - ') + ' ' + thruHike.years.join(' - ')}
		    		  </p>
		    		  <a
		    		    aria-label={`gear used on ${thruHike.title} hike`}
		    		    className="gear"
		    		    href={thruHike.gearLink}
		    		    target="_blank"
		    		    rel="noreferrer"
		    		  >
		    		  	Gear <Components.Images.External />
		    		 </a>
		    		  <div className="image">
		    		  	<button
		    		  		aria-expanded={(selectedImage === index && isFullScreen) ? 'true' : 'false'}
		    		    	aria-label={`${thruHike.title} hike`}
		    		  	  onClick={() => handleOnZoom(index)}
		    		  	  title={`${thruHike.title}, click to expand/compress`}
		    		  	  type="button"
		    		  	>
		    		  		<div aria-hidden="true" style={{ backgroundImage: `url(${thruHike.image})` }} />
		    		  	</button>
		    		  </div>
		    		  <div className="stats">
			          {thruHike.stats.map((stat: ThruHikeStat) => (
			            <div className="stat" key={stat.title}>
			              <h4>{stat.title}</h4>
			              <p>{stat.value}</p>
			            </div>
			          ))}
			        </div>
		    		</div>
	    		)}
  			</InView>
    	))}
    </section>
  );
}
