import tw from '@/styles';

type Props = {
  notes: string[];
};

export default function Overview({ notes }: Props) {
  return (
    <article aria-label="overview" className={styles.container} id="overview">
      {notes.map((note) => (
        <p className={styles.paragraph} key={note}>
          {note}
        </p>
      ))}
    </article>
  );
};

const styles = tw({
  container: `
    p-6 pt-2

    lg:pt-6
  `,
  paragraph: `
    w-full
    text-base
    mb-4

    last:mb-0

    sm:text-sm
    lg:max-w-2/3
  `,
});
