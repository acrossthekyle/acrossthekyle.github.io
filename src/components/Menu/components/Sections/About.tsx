import React from 'react';

import { getImageUrl } from '../../../../utils';

export function About() {
	return (
		<>
  		<figure
        role="img"
        style={{ backgroundImage: `url(${getImageUrl('backpacking-1.jpeg', '1709072809903')})` }}
      >
        <figcaption>Grande Randonnée 20, France</figcaption>
    	</figure>
  		<p>
        Hey, I'm Kyle!
      </p>
      <p>
        One day, on a whim, I booked a trip to Spain to walk The Camino de Santiago:
        a nearly 500 mile long trail from the border of France to the Atlantic ocean.
        33 days and countless life-long friends later I was hooked on backpacking.
        Since then, I have visited numerous countries, and hiked (thru-hiked)
        various long-distance trails.
      </p>
      <p>
        I currently reside in the concrete jungle of Chicago with my partner
        and our dog Dax. I am a programmer by trade, and a backpacker by
        design with a love for hiking trails that are hundreds of miles long.
      </p>
      <a
        href="mailto:hello@acrossthekyle.com?subject=Hey!"
        title="Send email to hello@acrossthekyle.com"
        aria-label="send email to hello@acrossthekyle.com"
      >
        Say Hello
      </a>
  	</>
	);
}
