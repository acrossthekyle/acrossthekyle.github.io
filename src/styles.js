export default function tw(styles) {
  return styles.replace(/(\r\n|\n|\r)/gm, '').replace(/\s+/g, ' ').trim();
}