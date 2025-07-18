const data = [
  {
    "id": "smdTdOu9zzcIC7K",
    "title": "Egypt",
    "type": "vacation",
    "image": "2022/12/28/88613c33-7796-47be-afc6-d31f51a80600.jpeg",
    "date": "December 29 - January 6",
    "year": "2023",
    "timestamp": 1672293600,
    "coordinates": {
      "left": "54",
      "top": "36"
    },
    "location": "Cairo and Luxor"
  },
  {
    "id": "rDF2WHqEvEKlILl",
    "title": "Alta Via 1",
    "type": "thru-hike",
    "image": "2019/07/16/c4d424d9-7826-422d-9e0f-1b7e8b20af99.jpeg",
    "date": "July 16 - 25",
    "year": "2019",
    "timestamp": 1563253200,
    "coordinates": {
      "left": "47.75",
      "top": "21"
    },
    "location": "Dolomites, Northern Italy"
  },
  {
    "id": "N4HkpHlfYaqDxql",
    "title": "Camino de Santiago",
    "type": "thru-hike",
    "image": "2018/06/02/1921986b-9cf8-4bf8-b531-3bfe2f098f93.jpeg",
    "date": "June 2 - July 4",
    "year": "2018",
    "timestamp": 1527915600,
    "coordinates": {
      "left": "42.8",
      "top": "26"
    },
    "location": "Northern Spain"
  },
  {
    "id": "9sTY7zOYLEgzg14",
    "title": "Colorado",
    "type": "peak-bagging",
    "image": "2020/09/04/e773dc33-82a1-48c1-b481-4eb09d736140.jpeg",
    "date": "September 3 - 7",
    "year": "2020",
    "timestamp": 1599109200,
    "location": "Granite, Idaho Springs, and Silver Plume"
  },
  {
    "id": "yCgl91McCKXS8qT",
    "title": "Colorado",
    "type": "peak-bagging",
    "image": "2019/08/31/52f1514b-91a4-494d-93df-6ae9c81df01c.jpeg",
    "date": "August 30 - September 2",
    "year": "2019",
    "timestamp": 1567141200,
    "location": "Twin Lakes and Breckenridge"
  },
  {
    "id": "w2RLiwOJUV47nRG",
    "title": "O Circuit",
    "type": "thru-hike",
    "image": "2020/02/18/5e958df4-56a2-4292-ae6d-b694f078a985.jpeg",
    "date": "February 18 - 25",
    "year": "2020",
    "timestamp": 1582005600,
    "coordinates": {
      "left": "25.8",
      "top": "95.5"
    },
    "location": "Patagonia, Chile"
  },
  {
    "id": "lBkSFDPGjsrJaHk",
    "title": "Annapurna",
    "type": "thru-hike",
    "image": "2019/10/19/946a73ae-8a0a-4cec-8f61-c0ff90245aa3.jpeg",
    "date": "October 19 - November 6",
    "year": "2019",
    "timestamp": 1571461200,
    "coordinates": {
      "left": "71.3",
      "top": "32"
    },
    "location": "Himalayas, Nepal"
  },
  {
    "id": "3XxhkdLe7pvjCfc",
    "title": "Tour du Mont Blanc",
    "type": "thru-hike",
    "image": "2018/09/02/ec37f4a8-6310-4bf6-b1a7-cddb1f91bf3b.jpeg",
    "date": "September 2 - 13",
    "year": "2018",
    "timestamp": 1535864400,
    "coordinates": {
      "left": "46.6",
      "top": "22"
    },
    "location": "Alps, Europe"
  },
  {
    "id": "Lsgt4mh2dQrdWrn",
    "title": "Colorado",
    "type": "peak-bagging",
    "image": "2021/09/07/fbe767d5-63c6-4af7-8643-ceef9b4cce92.jpeg",
    "date": "September 7 - 9",
    "year": "2021",
    "timestamp": 1630990800,
    "location": "Buena Vista and Alma"
  },
  {
    "id": "2oThDjcm12S3Viu",
    "title": "Colorado",
    "type": "peak-bagging",
    "image": "2022/09/09/f722df6c-2869-4ff0-80f7-37014241e135.jpeg",
    "date": "September 9 - 11",
    "year": "2022",
    "timestamp": 1662699600,
    "coordinates": {
      "left": "12",
      "top": "30"
    },
    "location": "Granite and Leadville"
  },
  {
    "id": "kMw47tqPsEgrI14",
    "title": "Ice Age Trail",
    "type": "section-hike",
    "image": "2022/07/15/dde665dc-c7a8-4861-9155-87a885f30e2b.jpeg",
    "date": null,
    "year": "2022 - 2025",
    "timestamp": 1657861200,
    "coordinates": {
      "left": "16",
      "top": "25"
    },
    "location": "Wisconsin"
  },
  {
    "id": "pvSEvH3A7Ysnvsf",
    "title": "Tour du Mont Blanc",
    "type": "thru-hike",
    "image": "2024/07/27/2ba462f1-18ed-4122-b902-bc0c9554b75d.jpeg",
    "date": "July 27 - August 6",
    "year": "2024",
    "timestamp": 1722056400,
    "coordinates": {
      "left": "46.6",
      "top": "22"
    },
    "location": "Alps, Europe"
  },
  {
    "id": "OfpW2rt8VHawxvu",
    "title": "West Highland Way",
    "type": "thru-hike",
    "image": "2022/05/07/191dbf48-61aa-47f6-bbd7-cad7f3fc06e7.jpeg",
    "date": "May 7 - 12",
    "year": "2022",
    "timestamp": 1651899600,
    "coordinates": {
      "left": "43.6",
      "top": "14.4"
    },
    "location": "Highlands, Scotland"
  },
  {
    "id": "V3V3fsmvjdZ6TPE",
    "title": "Corsica Grand Route",
    "type": "thru-hike",
    "image": "2023/06/21/0ff34736-949f-4981-b339-06b6d304ba51.jpeg",
    "date": "June 21 - July 3",
    "year": "2023",
    "timestamp": 1687323600,
    "coordinates": {
      "left": "46.5",
      "top": "26"
    },
    "location": "Corsica, France"
  }
];

export default data;