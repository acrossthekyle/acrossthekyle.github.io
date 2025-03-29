type Props = {
  id: string;
};

function Pack({ id }) {
  return (
    <a href={`/packs/${id}`}>
      here
    </a>
  );
}

export default Pack;
