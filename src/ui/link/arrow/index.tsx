type Props = {
  children: React.ReactNode | React.ReactNode[];
};

export default function Arrow({ children }: Props) {
  return (
    <>
      {children} ↗
    </>
  );
}
