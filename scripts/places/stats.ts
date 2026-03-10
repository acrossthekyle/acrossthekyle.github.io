/* eslint-disable */
// @ts-nocheck

function formatNumber(value) {
  return new Intl.NumberFormat().format(Number(value).toFixed(0));
};

function getDistance(gpx) {
  if (gpx.length === 0) {
    return null;
  }

  const value = gpx.reduce((total, data) => {
    return total + Number(data.distance.value.complex.imperial.replace(',', ''));
  }, 0);

  return {
    label: 'Distance',
    value: {
      basic: '',
      complex: {
        imperial: formatNumber(value),
        metric: formatNumber(value * 1.609),
      },
    },
  };
};

function getGain(place, gpx) {
  if (gpx.length === 0 || place.type === 'summit') {
    return null;
  }

  const value = gpx.reduce((total, data) => {
    return total + Number(data.gain.value.complex.imperial.replace(',', ''));
  }, 0);

  return {
    label: 'Elevation gain',
    value: {
      basic: '',
      complex: {
        imperial: formatNumber(value),
        metric: formatNumber(value / 3.281),
      },
    },
  };
};

function getLoss(place, gpx) {
  if (gpx.length === 0 || place.type === 'summit') {
    return null;
  }

  const value = gpx.reduce((total, data) => {
    return total + Number(data.loss.value.complex.imperial.replace(',', ''));
  }, 0);

  return {
    label: 'Elevation loss',
    value: {
      basic: '',
      complex: {
        imperial: formatNumber(value),
        metric: formatNumber(value / 3.281),
      },
    },
  };
};

function getMax(place, gpx) {
  if (gpx.length === 0) {
    return null;
  }

  const altitudes = [];

  gpx.forEach((data) => {
    altitudes.push(Math.max(...data.elevation));
  });

  const value = Math.max(...altitudes);

  return {
    label: ['summit'].includes(place.type) ? 'Highest peak' : 'Max altitude',
    value: {
      basic: '',
      complex: {
        imperial: formatNumber(value),
        metric: formatNumber(value / 3.281),
      },
    },
  };
};

function getTotal(place, gpx) {
  const labels = {
    'destination': 'Experiences',
    'section hike': 'Total',
    'summit': 'Total',
    'thru-hike': 'Duration',
  };

  const units = {
    'destination': 'destinations',
    'section hike': 'sections',
    'summit': 'summits',
    'thru-hike': 'days',
  };

  const label = labels[place.type];

  if (label === undefined) {
    return null;
  }

  return {
    label,
    value: {
      basic: `${gpx.length} ${units[place.type]}`,
      complex: {
        imperial: '',
        metric: '',
      },
    },
  };
};

function getWhen(place) {
  return {
    label: 'When',
    value: {
      basic: place.date,
      complex: {
        imperial: '',
        metric: '',
      },
    },
  };
};

export async function compile(place, stages, gpx) {
  return {
    distance: getDistance(gpx),
    gain: getGain(place, gpx),
    loss: getLoss(place, gpx),
    max: getMax(place, gpx),
    placeId: place.id,
    total: getTotal(place, stages),
    when: getWhen(place),
  };
};
