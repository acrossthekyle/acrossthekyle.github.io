import './Introduction.scss';

import React from 'react';

import { IntroductionComponents } from './components';

export function Introduction() {
  return (
    <>
      <IntroductionComponents.Scroller />
      <section
        id="introduction"
        className="section"
      >
        <article>
          <span id="pre">ACROSS THE</span>
          <span id="middle">K Y L E</span>
          <span id="post">
            Boundless Backpacker, Digital Developer
          </span>
        </article>
        <div className="background one" />
        <div className="background two" />
        <div className="background three" />
        <div className="background four" />
      </section>
    </>
  );
}
