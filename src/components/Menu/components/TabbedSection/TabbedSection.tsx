import './TabbedSection.scss';

import React from 'react';

type Props = {
	children: React.ReactNode;
	isActive: boolean;
};

export function TabbedSection({ children, isActive }: Props) {
	if (!isActive) {
		return null;
	}

	return (
  	<article className="tabbed-section animate__animated animate__fadeInUp animate__faster active">
  		{children}
  		<br aria-hidden="true" />
  		<br aria-hidden="true" />
  	</article>
	);
}
