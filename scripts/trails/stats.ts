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

function getGain(gpx) {
  if (gpx.length === 0) {
    return null;
  }

  const value = gpx.reduce((total, data) => {
    return total + Number(data.elevationGain.value.complex.imperial.replace(',', ''));
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

function getLoss(gpx) {
  if (gpx.length === 0) {
    return null;
  }

  const value = gpx.reduce((total, data) => {
    return total + Number(data.elevationLoss.value.complex.imperial.replace(',', ''));
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

function getMax(gpx) {
  if (gpx.length === 0) {
    return null;
  }

  const altitudes = [];

  gpx.forEach((data) => {
    altitudes.push(Math.max(...data.elevation));
  });

  const value = Math.max(...altitudes);

  return {
    label: 'Max altitude',
    value: {
      basic: '',
      complex: {
        imperial: formatNumber(value),
        metric: formatNumber(value / 3.281),
      },
    },
  };
};

export async function compile(gpx) {
  return {
    distance: getDistance(gpx),
    gain: getGain(gpx),
    loss: getLoss(gpx),
    max: getMax(gpx),
  };
};
