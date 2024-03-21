import { AltaVia1 } from 'data/hikes/AltaVia1';
import { Annapurna } from 'data/hikes/Annapurna';
import { CaminoDeSantiago } from 'data/hikes/CaminoDeSantiago';
import { GrandeRandonnee20 } from 'data/hikes/GrandeRandonnee20';
import { OCircuit } from 'data/hikes/OCircuit';
import { TourDuMontBlanc } from 'data/hikes/TourDuMontBlanc';
import { WestHighlandWay } from 'data/hikes/WestHighlandWay';

export const hikes = [
	GrandeRandonnee20,
	WestHighlandWay,
	OCircuit,
	Annapurna,
	AltaVia1,
	TourDuMontBlanc,
	CaminoDeSantiago,
];

export const hikesByYear = [
	{
		year: '2024',
		hikes: [TourDuMontBlanc],
	},
	{
		year: '2023',
		hikes: [GrandeRandonnee20],
	},
	{
		year: '2022',
		hikes: [WestHighlandWay],
	},
	{
		year: '2020',
		hikes: [OCircuit],
	},
	{
		year: '2019',
		hikes: [Annapurna, AltaVia1],
	},
	{
		year: '2018',
		hikes: [TourDuMontBlanc, CaminoDeSantiago],
	}
];
