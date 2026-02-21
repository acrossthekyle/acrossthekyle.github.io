type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Header({ children }: Props) {
  return (
    <h2 id="timeline">
      {children}
    </h2>
  );
}
