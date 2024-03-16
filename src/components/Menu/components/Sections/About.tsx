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
        One day I booked a trip to walk The Camino de Santiago:
        a nearly 500 mile long backpacking trail across Northern Spain from
        France to the Atlantic ocean. Since then, I have visited numerous
        countries, and hiked (thru-hiked) various long-distance trails.
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
