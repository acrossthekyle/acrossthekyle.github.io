import Context from '../context';

type Props = {
  children: React.ReactNode[];
  total?: number;
};

export default function Container({ children, total }: Props) {
  return (
    <Context total={total}>
      {children}
    </Context>
  );
}
