import './ThruHikes.scss';

import React, { useContext, useEffect, useState } from 'react';
import { InView, useInView } from 'react-intersection-observer';

import { ScrollContext } from '../../contexts/ScrollContext';
import { classNames, imageUrl } from '../../utils';
import { Components } from '../components';
import { ThruHikesComponents } from './components';
import { THRU_HIKES } from './ThruHikes.constants';
import { ThruHike, ThruHikeStat } from './ThruHikes.types';

export function ThruHikes() {
	const { toggleCanScroll } = useContext(ScrollContext);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [hikeWidth, setHikeWidth] = useState(0);
	const [isFullScreen, toggleIsFullScreen] = useState(false);
	const [selectedImage, setSelectedImage] = useState<number | null>(null);

	useEffect(() => {
		handleOnWindowResize();

		window.addEventListener('resize', handleOnWindowResize);

		return () => {
			window.removeEventListener('resize', handleOnWindowResize);
		}
	}, []);

	const handleOnWindowResize = () => {
		setHikeWidth(document.querySelector('.hike')?.clientWidth ?? 0);
	};

	const handleOnZoom = (index: number) => {
		setSelectedImage(index);

		toggleIsFullScreen(!isFullScreen);

		toggleCanScroll();
	};

	const handleOnInViewChange = (inView: boolean, index: number) => {
		if (inView) {
			setCurrentIndex(index);
		}
	};

	const handleOnJump = (index: number) => {
		setCurrentIndex(index);

		document.querySelector('.thru-hikes')?.scrollBy({
			top: 0,
			left: 300 * (currentIndex > index ? -1 * (currentIndex - index) : index - currentIndex),
			behavior: 'smooth'
		});
	};

  return (
  	<section
  	  aria-label="backpacking"
  	  aria-orientation="horizontal"
  	  className={classNames([
  	  	'thru-hikes',
  	  	isFullScreen && 'is-fullscreen'
  	 	])}
  	  role="listbox"
  	>
  	  <div className="content">
	  		{THRU_HIKES.map((thruHike: ThruHike, index: number) => {
	  			if (thruHike.id === 'introduction') {
	  				return (
			  			<InView
			    		  key={thruHike.id}
			    		  onChange={(inView: boolean) => handleOnInViewChange(inView, index)}
			    		  threshold={0.9}
			    		>
			    			{({ inView, ref }) => (
				    			<div className="introduction" id="introduction" ref={ref} role="option">
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
							      <div className="scroll-helper">
							        Scroll/swipe <ThruHikesComponents.Images.ArrowRight />
							      </div>
						      </div>
					      )}
			    		</InView>
			    	);
	  			}

	  			return (
		    		<InView
		    		  key={thruHike.id}
		    		  onChange={(inView: boolean) => handleOnInViewChange(inView, index)}
		    		  threshold={0.9}
		    		>
		    			{({ inView, ref }) => (
		    				<div
		    					className={classNames([
				    		  	'hike',
				    		  	isFullScreen && 'zoomed',
				    		  	((selectedImage === index && isFullScreen) || inView) && 'in-view'
				    		  ])}
				    		  ref={ref}
				    		  role="option"
		    				>
				    		  <div className="context">
				    		    <p>
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
					    		  	Gear List <Components.Images.External />
					    		  </a>
				    		  </div>
				    		  <span aria-hidden="true" className="number">{index} of {THRU_HIKES.length - 1}</span>
				    		  <h3 className="title">{thruHike.title}</h3>
				    		  <div className="image">
				    		  	<button
				    		  		aria-expanded={(selectedImage === index && isFullScreen) ? 'true' : 'false'}
				    		    	aria-label={`${thruHike.title} hike`}
				    		    	className="interact"
				    		  	  onClick={() => handleOnZoom(index)}
				    		  	  title={`${thruHike.title}, click to expand/compress`}
				    		  	  type="button"
				    		  	>
				    		  		<div
				    		  		  aria-hidden="true"
				    		  		  className="background"
				    		  		  style={{ backgroundImage: `url(${thruHike.image})` }}
				    		  		/>
				    		  	</button>
				    		  	<ThruHikesComponents.Images.Maximize />
				    		  	<ThruHikesComponents.Images.Minimize />
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
	    		);
	  		})}
  		</div>
  		<div className="dots">
				<div className="centered">
	    		{THRU_HIKES.map((thruHike: ThruHike, index: number) => (
		    		<button
		    			aria-label={`go to ${thruHike.title}`}
		    		  className={classNames([
		    		  	'dot',
		    		  	currentIndex === index && 'active'
		    		 	])}
		    		  key={thruHike.id}
		    		  onClick={() => handleOnJump(index)}
		    		  title={thruHike.title}
		    		/>
	    		))}
    		</div>
    	</div>
    </section>
  );
}
