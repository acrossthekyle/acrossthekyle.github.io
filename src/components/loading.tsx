import Styles from '@/styles';

const scss = Styles.Components.Loading;

type Props = {
  className?: string;
};

function Loading({ className = '' }) {
  return (
    <div className={`${scss.wrapper} ${className}`.trim()}>
      <div className={scss.loading}>
        <span className={scss.loader} />
        <span className={scss.loader} />
        <span className={scss.loader} />
      </div>
    </div>
  );
}

export default Loading;
