import Image from 'next/image';

import { Layout } from '@/layout';

export default function View() {
  return (
    <Layout group="about">
      <header>
        <h1>
          <strong>Hey, I'm Kyle</strong>
          <small>A backpacker and software engineer.</small>
        </h1>
        <p>
          I live on the lands belonging to the <em>Potawatomi</em>, <em>Ojibwe</em>, and <em>Odawa</em> &mdash; otherwise known as the city of <em>Chicago</em>. I've spent the past {new Date().getFullYear() - 2012} years building web apps, and the last {new Date().getFullYear() - 2018} years exploring the world.
        </p>
        <Image
          alt="Picture of Kyle Gilbert"
          className="w-full max-w-3xs mt-16 mb-0 mx-auto"
          height={540}
          sizes="50vw"
          src="8ed54501-bdcb-40b7-9387-f2fc306db83d.png"
          width={960}
        />
      </header>
      <p>
        <small>
          <strong>
            Next Adventure
          </strong>
          Salkantay Trek, Peru &mdash; July 2026
        </small>
      </p>
      <p>
        <small>
          <strong>
            Current Role
          </strong>
          Senior Engineer II, Optum Digital &mdash; Since 2020
        </small>
      </p>
    </Layout>
  );
}
