import Styles from '@/styles';

const scss = Styles.Components.Post.Content;

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

function Content({ children }: Props) {
  return (
    <section className={scss.wrapper}>
      {children}
      <div data-backdrop data-backdrop-active="false" />
    </section>
  );
}

export default Content;
