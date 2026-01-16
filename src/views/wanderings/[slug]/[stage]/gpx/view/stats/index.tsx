import type { Gpx, Stats, Termini } from '@/types';

type Props = {
  gpx: Gpx;
  stats: Stats;
  termini: Termini;
};

type Section = {
  heading: string;
  value: string;
};

export default function Stats({ gpx, stats, termini }: Props) {
  const sections: Section[] = [
    {
      heading: 'Start',
      value: termini.start.words.join(' '),
    },
    {
      heading: 'End',
      value: termini.end.words.join(' '),
    },
  ];

  if (stats.time) {
    sections.push({
      heading: 'Time',
      value: `${stats.time.value} ${stats.time.units}`,
    });
  }

  if (stats.distance) {
    sections.push({
      heading: 'Length',
      value: `${stats.distance.value.imperial} ${stats.distance.units.imperial.full}`,
    });
  }

  if (gpx !== undefined) {
    if (gpx.length > 0) {
      sections.push({
        heading: 'Altitude Start',
        value: `${new Intl.NumberFormat().format(gpx[0][2])} ft`,
      });
    }

    if (gpx.length > 0) {
      sections.push({
        heading: 'Altitude End',
        value: `${new Intl.NumberFormat().format(gpx[gpx.length - 1][2])} ft`,
      });
    }
  }

  if (stats.max) {
    sections.push({
      heading: 'Max Altitude',
      value: `${stats.max.value.imperial} ${stats.max.units.imperial.abbreviated}`,
    });
  }

  if (stats.gain) {
    sections.push({
      heading: 'Elevation Gain',
      value: `${stats.gain.value.imperial} ${stats.gain.units.imperial.abbreviated}`,
    });
  }

  if (stats.loss) {
    sections.push({
      heading: 'Elevation Loss',
      value: `${stats.loss.value.imperial} ${stats.loss.units.imperial.abbreviated}`,
    });
  }

  return (
    <ul aria-label="stats" className="grid grid-cols-2 gap-2 mt-16">
      {sections.map((section: Section, index: number) => (
        <li key={index}>
          <p>
            <small>
              <strong>{section.heading}</strong>
              {section.value}
            </small>
          </p>
        </li>
      ))}
    </ul>
  );
}
