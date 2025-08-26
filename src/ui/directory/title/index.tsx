import Title from '../../title';

type Props = {
  children: React.ReactNode;
};

export default function DirectoryTitle({ children }: Props) {
  return (
    <Title>{children}</Title>
  );
}
