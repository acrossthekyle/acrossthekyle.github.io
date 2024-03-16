import React from 'react';

import { Images } from '../../../../images';

export function Programming() {
	return (
  	<>
  		<p>
  			I have been doing web development (front and back) for 15+ years with the
        latter third of that time spent working in React and React Native. I
        like to refer to it as "designing code".
  		</p>
      <p>Some companies I've worked for:</p>
      <ul>
        <li>Red Frog Events</li>
        <li>Rally Health</li>
      </ul>
      <br />
  		<a
        title="View resume"
        href="resume.pdf"
        target="_blank"
        rel="noreferrer"
        aria-label="view resume"
      >
        View my full work history <Images.External />
      </a>
      <hr />
  		<p>
  			When not doing work for my full-time job, I like to tinker with Garmin wearable apps.
  		</p>
  		<a
        href="https://apps.garmin.com/en-US/developer/f796f8e5-5034-44c2-99a7-21d319c6c728/apps"
        target="_blank"
        title="Go to my garmin apps"
        rel="noreferrer"
        aria-label="go to my garmin apps"
      >
        My garmin apps <Images.External />
      </a>
  	</>
	);
}
