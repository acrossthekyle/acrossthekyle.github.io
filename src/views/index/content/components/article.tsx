import tw from '@/styles';

type Props = {
  className?: string;
  id: string;
};

export default function Article({
  children,
  className = '',
  id,
}: React.PropsWithChildren<Props>) {
  return (
    <article className={`${styles.container} ${className}`.trim()} id={id}>
      {children}
    </article>
  );
};

const styles = tw({
  container: `
    p-6
  `,
});
