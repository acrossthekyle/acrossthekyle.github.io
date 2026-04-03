const data = [
  {
    "albumId": "river-ridge-trail-2026",
    "coordinates": "40.0080° N, 87.5717° W",
    "id": "river-ridge-trail-2026",
    "location": "Illinois, USA",
    "title": "River Ridge Trail",
    "type": "weekend hike",
    "when": "03 14-15 2026"
  },
  {
    "albumId": "yellow-river-trail-2025",
    "coordinates": "43.1713° N, 91.2594° W",
    "id": "yellow-river-trail-2025",
    "location": "The Driftless Area, Iowa, USA",
    "title": "Yellow River Trail",
    "type": "weekend hike",
    "when": "10 18-19 2025"
  },
  {
    "albumId": "tour-du-mont-blanc-2024",
    "coordinates": "45.8902° N, 6.7978° E",
    "id": "tour-du-mont-blanc-2024",
    "location": "The Alps, Europe",
    "title": "Tour du Mont Blanc",
    "type": "thru-hike",
    "when": "07 27 / 08 06 2024"
  },
  {
    "albumId": "gr20-2023",
    "coordinates": "42.5074° N, 8.8554° E",
    "id": "gr20-2023",
    "location": "Corsica, France",
    "title": "The GR 20",
    "type": "thru-hike",
    "when": "06 21 / 07 03 2023"
  },
  {
    "albumId": "southern-rockies-2019",
    "coordinates": "39.1872° N, 106.4753° W",
    "id": "mount-massive-2022",
    "location": "Sawatch Range, Colorado, USA",
    "title": "Mount Massive",
    "type": "summit",
    "when": "09 11 2022"
  },
  {
    "albumId": "southern-rockies-2019",
    "coordinates": "38.9607° N, 106.3606° W",
    "id": "mount-belford-2022",
    "location": "Sawatch Range, Colorado, USA",
    "title": "Mount Belford",
    "type": "summit",
    "when": "09 09 2022"
  },
  {
    "albumId": "ice-age-trail-2022",
    "coordinates": "42.8760° N, 88.5257° W",
    "id": "ice-age-trail-2022",
    "location": "Wisconsin",
    "title": "Ice Age Trail",
    "type": "section hike",
    "when": "2022+"
  },
  {
    "albumId": "west-highland-way-2022",
    "coordinates": "55.9440° N, 4.3200° W",
    "id": "west-highland-way-2022",
    "location": "Highlands, Scotland",
    "title": "West Highland Way",
    "type": "thru-hike",
    "when": "05 07-12 2022"
  },
  {
    "albumId": "southern-rockies-2019",
    "coordinates": "39.3470° N, 106.1186° W",
    "id": "mount-decalibron-2021",
    "location": "Mosquito Range, Colorado, USA",
    "title": "Mount DeCaLiBron",
    "type": "summit",
    "when": "09 09 2021"
  },
  {
    "albumId": "southern-rockies-2019",
    "coordinates": "38.6190° N, 106.2392° W",
    "id": "mount-shavano-2021",
    "location": "Sawatch Range, Colorado, USA",
    "title": "Mount Shavano",
    "type": "summit",
    "when": "09 07 2021"
  },
  {
    "albumId": "southern-rockies-2019",
    "coordinates": "39.6338° N, 105.8176° W",
    "id": "grays-peak-2020",
    "location": "Front Range, Colorado, USA",
    "title": "Grays Peak",
    "type": "summit",
    "when": "09 06 2020"
  },
  {
    "albumId": "southern-rockies-2019",
    "coordinates": "39.5826° N, 105.6688° W",
    "id": "mount-bierstadt-2020",
    "location": "Front Range, Colorado, USA",
    "title": "Mount Bierstadt",
    "type": "summit",
    "when": "09 05 2020"
  },
  {
    "albumId": "southern-rockies-2019",
    "coordinates": "39.0295° N, 106.4730° W",
    "id": "la-plata peak-2020",
    "location": "Sawatch Range, Colorado, USA",
    "title": "La Plata Peak",
    "type": "summit",
    "when": "09 04 2020"
  },
  {
    "albumId": "o-circuit-2020",
    "coordinates": "50.9652° S, 72.8635° W",
    "id": "o-circuit-2020",
    "location": "Patagonia, Chile",
    "title": "O Circuit",
    "type": "thru-hike",
    "when": "02 18-25 2020"
  },
  {
    "albumId": "annapurna-circuit-2019",
    "coordinates": "28.2391° N, 84.3693° E",
    "id": "annapurna-circuit-2019",
    "location": "The Himalayas, Nepal",
    "title": "Annapurna Circuit",
    "type": "thru-hike",
    "when": "10 19 / 11 06 2019"
  },
  {
    "albumId": "southern-rockies-2019",
    "coordinates": "39.3972° N, 106.1063° W",
    "id": "quandary-peak-2019",
    "location": "Tenmile Range, Colorado, USA",
    "title": "Quandary Peak",
    "type": "summit",
    "when": "09 01 2019"
  },
  {
    "albumId": "southern-rockies-2019",
    "coordinates": "39.1177° N, 106.4453° W",
    "id": "mount-elbert-2019",
    "location": "Sawatch Range, Colorado, USA",
    "title": "Mount Elbert",
    "type": "summit",
    "when": "08 31 2019"
  },
  {
    "albumId": "alta-via-1-2019",
    "coordinates": "46.6992° N, 12.0852° E",
    "id": "alta-via-1-2019",
    "location": "The Dolomites, Italy",
    "title": "Alta Via 1",
    "type": "thru-hike",
    "when": "07 16-25 2019"
  },
  {
    "albumId": "tour-du-mont-blanc-2018",
    "coordinates": "45.8902° N, 6.7983° E",
    "id": "tour-du-mont-blanc-2018",
    "location": "The Alps, Europe",
    "title": "Tour du Mont Blanc",
    "type": "thru-hike",
    "when": "09 02-13 2018"
  },
  {
    "albumId": "camino-frances-2018",
    "coordinates": "43.1634° N, 1.2358° W",
    "id": "camino-frances-2018",
    "location": "Northern Spain",
    "title": "Camino Frances",
    "type": "thru-hike",
    "when": "06 02 / 07 04 2018"
  }
];

export default data;