import { AltaVia1 } from './AltaVia1';
import { Annapurna } from './Annapurna';
import { CaminoDeSantiago } from './CaminoDeSantiago';
import { GrandeRandonnee20 } from './GrandeRandonnee20';
import { OCircuit } from './OCircuit';
import { TourDuMontBlanc } from './TourDuMontBlanc';
import { WestHighlandWay } from './WestHighlandWay';

export const TRIPS = [
	GrandeRandonnee20,
	WestHighlandWay,
	OCircuit,
	Annapurna,
	AltaVia1,
	TourDuMontBlanc,
	CaminoDeSantiago,
];

export const TRIPS_BY_YEAR = [
	{
		year: '2024',
		trips: [TourDuMontBlanc],
	},
	{
		year: '2023',
		trips: [GrandeRandonnee20],
	},
	{
		year: '2022',
		trips: [WestHighlandWay],
	},
	{
		year: '2020',
		trips: [OCircuit],
	},
	{
		year: '2019',
		trips: [Annapurna, AltaVia1],
	},
	{
		year: '2018',
		trips: [TourDuMontBlanc, CaminoDeSantiago],
	}
];
