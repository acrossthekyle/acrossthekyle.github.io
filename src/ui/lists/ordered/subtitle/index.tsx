type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Subtitle({ children }: Props) {
  return (
    <small>
      {children}
    </small>
  );
}
