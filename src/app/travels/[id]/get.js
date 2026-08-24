import travels from '@/cache/travels';

export async function get(id) {
  const data = await import(`../../../cache/travels/${id}/data.js`);
  const images = await import(`../../../cache/travels/${id}/images.js`);

  let landmarks = undefined;
  let timeline = undefined;
  let trail = undefined;

  try {
    landmarks = await import(`../../../cache/travels/${id}/landmarks.js`);
  } catch {
    // do nothing
  }

  try {
    timeline = await import(`../../../cache/travels/${id}/timeline.js`);
  } catch {
    // do nothing
  }

  try {
    trail = await import(`../../../cache/travels/${id}/trail.js`);
  } catch {
    // do nothing
  }

  return {
    images: images.default || images,
    landmarks: landmarks?.default || landmarks,
    timeline: timeline?.default || timeline,
    trail: trail?.default || trail,
    travel: data.default || data,
    travels,
  };
};
