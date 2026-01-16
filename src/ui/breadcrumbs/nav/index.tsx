type Props = {
  children: React.ReactNode;
};

export default function Nav({ children }: Props) {
  return (
    <nav aria-label="breadcrumbs supplementary navigation">
      {children}
    </nav>
  );
}
