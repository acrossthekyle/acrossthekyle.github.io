export default function imageLoader({ src, width, quality }) {
  return `https://ik.imagekit.io/acrossthekyle/uploads/${src}?tr=w-${width}&q-${quality || 100}`;
}
