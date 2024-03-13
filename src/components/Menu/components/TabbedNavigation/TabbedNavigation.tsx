import './TabbedNavigation.scss';

import React from 'react';
import classNames from 'classnames';

type Props = {
	activeTab: number;
	onChange: (index: number) => void;
	tabs: string[];
};

export function TabbedNavigation({ activeTab, onChange, tabs }: Props) {
	const handleOnChange = (index: number) => {
  	onChange(index);
  };

	return (
  	<nav id="tabbed-navigation">
  		{tabs.map((tab: string, index: number) => (
  			<button
  				className={classNames({ active: activeTab === index })}
	  	    key={tab}
	  	    onClick={() => handleOnChange(index)}
	  	    title={`Go to ${tab}`}
	  	    type="button"
	  	  >
	  	  	{tab}
	  	  </button>
  		))}
  	</nav>
	);
}
