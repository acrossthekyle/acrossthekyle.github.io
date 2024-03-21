import Footer from './footer';
import Header from './header';
import { TripsProvider } from './trips';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <TripsProvider>
        {children}
        <Footer />
      </TripsProvider>
    </main>
  );
}
