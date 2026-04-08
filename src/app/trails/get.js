import trails from '@/db/trails';

export default function get() {
  const imperial = [...trails].reduce((sum, item) => sum + Number(item.distance.value.complex.imperial), 0);
  const metric = [...trails].reduce((sum, item) => sum + Number(item.distance.value.complex.metric), 0);

  return {
    days: [...trails].reduce((sum, item) => sum + Number(item.days), 0),
    distance: {
      imperial: new Intl.NumberFormat().format(imperial.toFixed(0)),
      metric: new Intl.NumberFormat().format(metric.toFixed(0)),
    },
    trails,
  };
};
