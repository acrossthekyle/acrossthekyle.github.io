export default function imageLoader({ src, width, quality }) {
  return `https://ik.imagekit.io/acrossthekyle/uploads/${src}${src.includes('updatedAt') ? '&' : '?'}tr=w-${width}&q-${quality || 80}`;
}