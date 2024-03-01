import './Pane.scss';

import React, { useState } from 'react';

import { classNames } from '../../../../utils';
import { Components } from '../../../components';
import { PaneComponents } from './components';

export function Pane() {
  const [isPaneOpen, setIsPaneOpen] = useState(false);

  const onToggle = () => {
    setIsPaneOpen(!isPaneOpen);
  };

  return (
    <>
      <button
        aria-label="open additional information pane"
        className="pane-toggle"
        onClick={onToggle}
        title="Open additional information pane"
        type="button"
      >
        <div className="pane-toggle-icon">
        	 <span className="pane-toggle-icon-line pane-toggle-icon-line-left" />
        	 <span className="pane-toggle-icon-line" />
        	 <span className="pane-toggle-icon-line pane-toggle-icon-line-right" />
        </div>
      </button>
      <div className={classNames(['pane', isPaneOpen && 'active'])}>
        <div className="pane-container">
          <PaneComponents.ThemeToggle />
          <article>
            <h2>Want To<br />Learn More?</h2>
            <h3>Get in touch</h3>
            <p>
              <a
                aria-label="send email to hello@acrossthekyle.com"
                href="mailto:hello@acrossthekyle.com?subject=Let's Build Something, Together"
                title="Send email to hello@acrossthekyle.com"
              >
                hello@acrossthekyle.com
              </a>
            </p>
            <h3>Hobbies</h3>
            <p>
              I like to make Garmin watch apps in my spare time.
            </p>
            <p>
              <a
                aria-label="go to my garmin app store"
                href="https://apps.garmin.com/en-US/developer/f796f8e5-5034-44c2-99a7-21d319c6c728/apps"
                target="_blank"
                title="Go to my garmin app store"
                rel="noreferrer"
              >
                My Garmin apps <Components.Images.External />
              </a>
            </p>
            <h3>The Boring Stuff</h3>
            <p>
              I've been doing web development (front and back) for 15+ years with the
              latter third of that time spent working in React and React Native (with
              a focus on Accessibility).
            </p>
            <p>
              <a
                aria-label="view resume"
                title="View resume"
                href="resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View my resume <Components.Images.External />
              </a>
            </p>
          </article>
          <button
            aria-label="close additional information pane"
            className="pane-close"
            onClick={onToggle}
            title="Close additional information pane"
            type="button"
          />
        </div>
        <div className="pane-backdrop">
          <button
            aria-hidden="true"
            className="pane-backdrop-close"
            onClick={onToggle}
            type="button"
          />
        </div>
      </div>
    </>
  );
}
