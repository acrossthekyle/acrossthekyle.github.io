import tw from '@/styles';

type Props = {
  notes: string[];
};

export default function Overview({ notes }: Props) {
  return (
    <article className={styles.container} id="overview">
      <h2 className={styles.header}>
        <span className={styles.index}>01</span>
        Overview
      </h2>
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
    p-6
    border-t border-current/12.5

    lg:border-t-0
  `,
  header: `
    flex flex-row-reverse items-start justify-between
    mb-6
    uppercase
    font-black
    text-sm
    tracking-wide

    sm:text-xs
    lg:text-tiny
  `,
  index: `
    font-normal
    text-tiny text-current/50
  `,
  paragraph: `
    w-full
    text-base
    mb-4

    last:mb-0

    sm:text-sm
    lg:text-xs
    lg:max-w-2/3
  `,
});
