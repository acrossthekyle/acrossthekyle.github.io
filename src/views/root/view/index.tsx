import Image from 'next/image';

import { Layout } from '@/layout';

export default function View() {
  return (
    <Layout group="about">
      <header>
        <h1 id="skip-to">
          <strong>Hey, I'm Kyle</strong>
          <small>A backpacker and software engineer living on the lands belonging to the <em>Potawatomi</em>, <em>Ojibwe</em>, and <em>Odawa</em> &mdash; otherwise known as the city of <em>Chicago</em>.</small>
        </h1>
        <Image
          alt="Picture of Kyle"
          className="w-full max-w-3xs mt-0 mb-16 mx-auto"
          height={540}
          sizes="50vw"
          src="8ed54501-bdcb-40b7-9387-f2fc306db83d.png"
          width={960}
        />
        <p>
          For the past {new Date().getFullYear() - 2012} years I've built numerous web apps because making things with code thrills me to no end, and it drives me to be creative. In my free time I like to explore the world. Over the last {new Date().getFullYear() - 2018} years I've been nearly everywhere, from the frozen peaks of the Himalayas in Nepal, to the untamed windswept beauty of Patagonia in Southern Chile.
        </p>
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
      <p>
        <small>
          <strong>
            Recent Trip
          </strong>
          Yellow River Trail, Iowa &mdash; October 2025
        </small>
      </p>
    </Layout>
  );
}
