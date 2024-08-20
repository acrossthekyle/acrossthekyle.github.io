import Head from 'next/head';

import styles from '@/styles/pages/about/index.module.scss';
import Post from '@/ui/post';
import Gallery from '@/ui/post/gallery';
import Hero from '@/ui/post/hero';
import Title from '@/ui/post/title';
import View from '@/ui/view';
import World from '@/ui/world';

import posts from '../../posts';

function Page() {
  return (
    <View>
      <Head>
        <title>Kyle &mdash; About</title>
      </Head>
      <Title title="About" />
      <Hero
        className={styles.hero}
        image="2024/06/28/04f81498-bd5d-471f-93c6-5f1b5ba4201f.jpeg"
      />
      <Post>
        <p>
          Hello, my name's Kyle, and I am a thru-hiker/programmer based in
          Chicago with my partner and our dog Dax. I've been on several
          thru-hikes all around the world, from South America to Nepal, and I've
          been programming continously since 2010. I like to refer to it as
          "designing code", and it allows me to live this life. As a
          hobby/side-project I made some apps for garmin smartwatches.
        </p>
        <p>
          <blockquote>
            The journey, rather than the destination, leaves the most impact and
            I discover what I’m capable of after walking for days-on-end, miles
            upon miles, and mountain pass after mountain pass.
          </blockquote>
        </p>
        <p>
          My first experience with thru-hiking was the Camino de Santiago, a 500
          mile trail, or Way (as it's called), in Northern Spain. It was a
          33-day journey across the country, full of new experiences and
          hardships, and I met so many amazing people on it. There was nothing
          quiet like carrying everything I needed on my back, while walking
          across open land from village to village, day after day. Yes my feet
          hurt (a lot), but I discovered what I was capable of, and I
          experienceed the world in a unique way while meeting all kinds of
          people from all walks of life (no pun intended).
        </p>
        <Gallery
          images={['2024/06/28/cc958578-0947-4d2e-a64a-a2c92c20dd85.jpeg']}
          title="On the Annapurna Circuit in the Nepalese Himalayas"
        />
        <p>
          Needless to say, I was hooked &mdash; I've done 7 thru-hikes, and
          summitted 9 mountain peaks, in addition to having traveled to more
          than a dozen countries. My favorite places so far have been Spain
          where I did the Camino de Santiago, and the Annapurna Circuit in
          Nepal, a place where I almost didn't make it.
        </p>
        <p>Here's a map of (nearly) everywhere I've been since 2018:</p>
        <World
          markers={posts.getArray().map(({ marker, title, uri }) => ({
            ...marker,
            label: title,
            uri,
          }))}
        />
        <p>
          In my free time I like to take long walks along the lakefront trails
          in Chicago, as cliché as that may sound, and read a good fiction book.
          I also enjoy playing the entire series of Halo (it's my favorite).
        </p>
        <Gallery
          images={['2024/06/28/9a2687f2-7a78-497d-87ca-3356ccd0fa36.jpeg']}
          title="Our dog Dax"
        />
        <h3>What's next</h3>
        <p>
          In July of 2024 I returned to Europe and re-hiked the Tour du Mont
          Blanc, this time with my partner. It had been nearly six years since I
          first thru-hiked it, and I hope to be able to repeat another
          experience of mine from 2018 sometime soon and walk the Camino de
          Santiago, maybe in the next year or two. There's also plans for making
          a trip to Peru in the next year.
        </p>
      </Post>
    </View>
  );
}

export default Page;
