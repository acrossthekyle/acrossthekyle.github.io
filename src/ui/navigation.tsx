import Link from 'next/link';

type Props = {
  containerClassName?: string;
  linkClassName: string;
  onClick?: () => void;
};

function Navigation({
  linkClassName,
  containerClassName = '',
  onClick,
}: Props) {
  return (
    <ul className={containerClassName}>
      <li className={linkClassName}>
        <Link href="/" onClick={onClick}>
          Home
        </Link>
      </li>
      <li className={linkClassName}>
        <Link href="/about" onClick={onClick}>
          About
        </Link>
      </li>
      <li className={linkClassName}>
        <Link href="/packs" onClick={onClick}>
          Packs
        </Link>
      </li>
      <li className={linkClassName}>
        <Link href="/shop" onClick={onClick}>
          Shop
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
