// import Image from 'next/image';

import { Layout } from '@/layout';

export default function View() {
  return (
    <Layout group="about">
      <header>
        <h1>Wandering is life.</h1>
        <p>
          Hey, I'm Kyle and I live on the lands belonging to the <em>Potawatomi</em>, <em>Ojibwe</em>, and <em>Odawa</em> &mdash; otherwise known as the city of <em>Chicago</em>. I've spent the past {new Date().getFullYear() - 2012} years building web apps, and the last {new Date().getFullYear() - 2018} years exploring the world.
        </p>
      </header>
      {/*<Image
        alt="Picture of Kyle Gilbert"
        className="mt-12 base:mt-18 base:w-2/3"
        height={540}
        sizes="50vw"
        src="8ed54501-bdcb-40b7-9387-f2fc306db83d.png"
        width={960}
      />*/}
    </Layout>
  );
}
