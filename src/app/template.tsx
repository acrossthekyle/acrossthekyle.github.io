import Header from './header';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main id="home">
      <Header />
      {children}
    </main>
  );
}
