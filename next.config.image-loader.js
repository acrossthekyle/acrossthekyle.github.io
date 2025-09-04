function getQuality(width, quality) {
  if (width <= 768) {
    return 60;
  }

  if (width <= 1280) {
    return 75;
  }

  return quality || 85;
}

export default function imageLoader({ src, width, quality }) {
  return `https://ik.imagekit.io/acrossthekyle/uploads/${src}?tr=w-${width}&q-${getQuality(width, quality)}`;
}
