export default function Caption({ children }: React.PropsWithChildren) {
  return (
    <figcaption id="template-caption">
      {children}
    </figcaption>
  );
}
