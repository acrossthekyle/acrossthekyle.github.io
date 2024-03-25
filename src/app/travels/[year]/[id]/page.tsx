import travels from 'data/travels'
import styles from 'scss/app/travels/travel/page.module.scss';

export default function Page({ params }) {
  const travel = travels.find(({ id, year }) => id === params.id && String(year) === params.year);

  return (
    <article className={styles.travel}>
      <div
        aria-labelledby="image-label"
        key={travel.id}
        role="img"
        style={{ backgroundImage: `url(${travel.image})` }}
      />
    </article>
  );
}
