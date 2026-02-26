type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Container({ children }: Props) {
  return (
    <>
      <hr />
      <nav>{children}</nav>
      <hr />
    </>
  );
}
