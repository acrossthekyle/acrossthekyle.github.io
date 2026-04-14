import { Pane } from 'react-leaflet';

import styles from './stylesheet';

const GRID_SIZE = 24;

export default function Coordinates() {
  const dimensions = {
    columns: Array.from({ length: Math.ceil(window.innerWidth / GRID_SIZE), }, (_, i) => i),
    rows: Array.from({ length: Math.ceil(window.innerHeight / GRID_SIZE), }, (_, i) => i),
  };

  return (
    <Pane
      name="grid-overlay-pane"
      style={{
        width: '100vw',
        height: 'calc(100vh - 4.75rem)',
        overflow: 'hidden !important',
        zIndex: 300,
        pointerEvents: 'none',
    }}>
      <div className={styles.grid} />
      <div className={styles.columns}>
        {dimensions.columns.map((column) => (
          <div className={styles.column} key={column}>
            <span aria-hidden="true" className={styles.cell}>
              [{column.toString().padStart(2, '0')}]
            </span>
          </div>
        ))}
      </div>
      <div className={styles.rows}>
        {dimensions.rows.map((row) => (
          <div aria-hidden="true" className={styles.cell} key={row}>
            [{(row + 1).toString().padStart(2, '0')}]
          </div>
        ))}
      </div>
    </Pane>
  );
}
