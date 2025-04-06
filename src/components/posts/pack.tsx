import Link from 'next/link';

type Props = {
  id: string;
};

function Pack({ id }) {
  return <Link href="/packs">here</Link>;
}

export default Pack;
