// todo - behave like trip details: separate icon for open an close in order to be able to scroll entire menu
import './Menu.scss';

import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import classNames from 'classnames';

import { MenuComponents } from './components';

export function Menu() {
  const [activeTab, setActiveTab] = useState(0);
  const [isOpen, toggleIsOpen] = useState(false);

  const swipeable = useSwipeable({
		trackTouch: true,
  	trackMouse: true,
	  onSwipedLeft: () => {
	  	handleOnToggle();
	  },
	});

  const handleOnToggle = () => {
  	if (isOpen) {
  		setTimeout(() => {
  			setActiveTab(0);

  			document.getElementById('menu-content')!.scrollTo(0, 0);
  		}, 500);
  	}

    toggleIsOpen(!isOpen);

    document.body.classList.toggle('unscrollable', !isOpen);
  };

	return (
		<>
		 	<button
		 		className={classNames({ pushed: isOpen })}
				id="menu-open"
		    onClick={handleOnToggle}
		    title="Open menu"
		    type="button"
		  >
		  	<span className="menu-toggle-line top" aria-hidden="true" />
		    <span className="menu-toggle-line middle" aria-hidden="true" />
		    <span className="menu-toggle-line bottom" aria-hidden="true" />
		  </button>
			<div
				id="menu"
				className={classNames({ 'active': isOpen })}
				{...swipeable}
				aria-hidden={isOpen ? 'false' : 'true'}
				aria-label="menu"
			>
				<section id="menu-content">
					<div id="menu-header">
						<button
							id="menu-close"
					    onClick={handleOnToggle}
					    title="Close menu"
					    type="button"
					  />
					  <MenuComponents.ThemeToggle />
					</div>
		      <MenuComponents.TabbedNavigation
		      	activeTab={activeTab}
		        onChange={setActiveTab}
		        tabs={['About', 'Thru-Hikes', 'Programming']}
		      />
		      <MenuComponents.TabbedSection isActive={activeTab === 0}>
		    		<MenuComponents.Sections.About />
		    	</MenuComponents.TabbedSection>
		    	<MenuComponents.TabbedSection isActive={activeTab === 1}>
		    	  <MenuComponents.Sections.Backpacking onClick={handleOnToggle} />
		    	</MenuComponents.TabbedSection>
		    	<MenuComponents.TabbedSection isActive={activeTab === 2}>
		    		<MenuComponents.Sections.Programming />
		    	</MenuComponents.TabbedSection>
	    	</section>
			</div>
		</>
	);
}
