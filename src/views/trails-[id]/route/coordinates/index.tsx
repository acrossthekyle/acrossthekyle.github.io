import styles from './stylesheet';

export default function Coordinates() {
  const dimensions = {
    columns: Array.from({ length: 1000 }, (_, i) => i),
    rows: Array.from({ length: 1000 }, (_, i) => i),
  };

  return (
    <div className={styles.container}>
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
    </div>
  );
}
