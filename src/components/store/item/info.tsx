import Styles from '@/styles';

const scss = Styles.Components.Store.Item.Info;

type Props = {
  name: string;
  price: number;
  snippet: string;
};

function Info({ name, price, snippet }: Props) {
  return (
    <>
      <h1 className={scss.name}>{name}</h1>
      <h2 className={scss.price}>${price}</h2>
      <p className={scss.snippet}>{snippet}</p>
    </>
  );
}

export default Info;
