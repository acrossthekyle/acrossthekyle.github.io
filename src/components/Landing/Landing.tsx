import './Landing.scss';

import React from 'react';

import { LandingComponents } from './components';

export function Landing() {
  return (
    <section className="landing">
      <LandingComponents.Pane />
      <article aria-label="about" className="content" role="group">
        <h1>Hey, I'm <span>Kyle</span> &mdash;</h1>
        <h2>
          Adventurous<br />Backpacker
          <br />
          <span>Diligent<br />Programmer</span>
        </h2>
        <p>
          <i className="icon"></i> Chicago, IL &mdash; with my partner and our dog Dax.
        </p>
        <p>
          I love to wear a backpack while hiking trails that are hundreds of miles
          long, and I design code for a living as a
          software engineer.
        </p>
      </article>
      <div aria-hidden="true" className="boots">
        <div className="boot-code animate__animated animate__fadeIn animate__delay-1s">
          <LandingComponents.Images.Boot />
          <LandingComponents.Images.Code />
        </div>
        <div className="boot-compass animate__animated animate__fadeIn">
          <LandingComponents.Images.Boot />
          <LandingComponents.Images.Compass />
        </div>
      </div>
    </section>
  );
}
