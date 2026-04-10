/* eslint-disable */
// @ts-nocheck

const LATITUDE = '41.8781';
const LONGITUDE = '-87.6298';

export function calculateSunTimes() {
  const date = new Date();
  const zenith = 90.833;
  const D2R = Math.PI / 180;
  const R2D = 180 / Math.PI;

  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const day = Math.floor(diff / (1000 * 60 * 60 * 24));

  const declination = 23.45 * Math.sin(D2R * (360 / 365) * (day - 81));

  const cosHa = (Math.cos(zenith * D2R) - (Math.sin(LATITUDE * D2R) * Math.sin(declination * D2R))) /
                (Math.cos(LATITUDE * D2R) * Math.cos(declination * D2R));

  if (cosHa > 1 || cosHa < -1) {
    return {
      sunrise: 'N/A',
      sunset: 'N/A',
    };
  }

  const ha = R2D * Math.acos(cosHa);

  const b = D2R * (360 / 365) * (day - 81);
  const eot = 9.87 * Math.sin(2 * b) - 7.53 * Math.cos(b) - 1.5 * Math.sin(b);

  const solarNoonUTC = 720 - (4 * LONGITUDE) - eot;
  const sunriseUTC = solarNoonUTC - (4 * ha);
  const sunsetUTC = solarNoonUTC + (4 * ha);

  const formatTime = (minutesUTC) => {
    const time = new Date(date);
          time.setUTCHours(0, minutesUTC, 0, 0);

    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return {
    sunrise: formatTime(sunriseUTC),
    sunset: formatTime(sunsetUTC),
  };
}
