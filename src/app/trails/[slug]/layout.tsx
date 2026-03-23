type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <ul className="flex-1 flex items-start h-dvh p-12">
        <li>
          <a href="/test">Test 2</a>
        </li>
        <li>
          <a href="/test">Test 2</a>
        </li>
        <li>
          <a href="/test">Test 2</a>
        </li>
        <li>
          <a href="/test">Test 2</a>
        </li>
        <li>
          <a href="/test">Test 2</a>
        </li>
        <li>
          <a href="/test">Test 2</a>
        </li>
        <li>
          <a href="/test">Test 2</a>
        </li>
      </ul>
      {children}
    </>
  );
}
