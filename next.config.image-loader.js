export default function imageLoader({ src, width, quality }) {
  return `https://ik.imagekit.io/acrossthekyle/uploads/${src}${src.includes('updatedAt') ? '&' : '?'}tr=w-1920&q-${quality || 80}`;
}
