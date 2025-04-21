import Styles from '@/styles';

const scss = Styles.Components.Post.Content;

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

function Content({ children }: Props) {
  return (
    <div className={scss.wrapper}>
      <div className={scss.content}>
        {children}
        <div data-backdrop data-backdrop-active="false" />
      </div>
    </div>
  );
}

export default Content;
