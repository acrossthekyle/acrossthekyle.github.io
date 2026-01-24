import { Layout } from '@/layout';
import { LinkItalic } from '@/ui/link';

export default function View() {
  return (
    <Layout group="about">
      <header>
        <h1 id="skip-to">
          <strong>
            Hello, I'm Kyle
          </strong>
          <small>Backpacker and software engineer</small>
        </h1>
      </header>
      <p>
        I live in <em>Chicago</em> with my partner and our dog Dax, on the lands of the <em>Potawatomi</em>, <em>Ojibwe</em>, and <em>Odawa</em>. By day, I build web apps as a self-taught software engineer. By trail, I explore the world &ndash; from Nepal's Himalayas to windswept Patagonia &ndash; carrying everything I need on my back. <em>Wandering is life</em>, and the thrill keeps me coming back for more.
      </p>
      <LinkItalic href="/trails-and-travels">
        My trails and travels
      </LinkItalic>
    </Layout>
  );
}
