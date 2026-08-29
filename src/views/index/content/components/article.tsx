import tw from '@/styles';

type Props = {
  id: string;
};

export default function Article({
  children,
  id,
}: React.PropsWithChildren<Props>) {
  return (
    <article className={styles.container} id={id}>
      {children}
    </article>
  );
};

const styles = tw({
  container: `
    p-6
  `,
});
