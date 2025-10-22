type Props = {
  children: React.ReactNode;
};

export default function DirectoryItem({ children }: Props) {
  return (
    <li>
      {children}
    </li>
  );
}
