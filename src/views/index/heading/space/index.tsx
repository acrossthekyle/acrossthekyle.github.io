import Location from './location';
import Time from './time';

export default function Space() {
  return (
    <section aria-label="local time and location">
      <Location />
      <Time />
    </section>
  );
};
