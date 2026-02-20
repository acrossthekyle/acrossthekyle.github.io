type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Item({ children }: Props) {
  return (
    <li>
      {children}
    </li>
  );
}
