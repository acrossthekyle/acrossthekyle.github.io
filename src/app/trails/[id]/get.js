import trails from '@/db/trails';

export default async function get(id) {
  const foundIndex = trails.findIndex(trail => trail.id === id);

  if (foundIndex === 0) {
    // get three older ones from starting index
  } else if (foundIndex === 1) {
    // get one newer and two older from starting index
  } else if (foundIndex === trails.length - 1) {
    // get three newest ones from ending index
  } else if (foundIndex === trails.length - 2) {
    // get one older and two newer from ending index
  } else {
    // get one newer and two older from starting index
  }

  try {
    const data = await import(`@/db/cache/trails/${id}.js`);

    return data;
  } catch {
    return null;
  }
};
