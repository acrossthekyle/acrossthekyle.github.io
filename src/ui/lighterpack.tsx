type Props = {
  id: string;
};

function Lighterpack({ id }) {
  return (
    <a href={`https://lighterpack.com/r/${id}`} target="_blank">
      lighterpack.com
    </a>
  );
}

export default Lighterpack;
