import { posts } from '@/cache/posts';
import Components from '@/components';
import Constants from '@/constants';
import Styles from '@/styles';

const scss = Styles.Pages.Me.Page;

function Page() {
  const markers = posts
    .filter((post) => post.marker)
    .map((post) => {
      if (post.marker) {
        return {
          ...post.marker,
          isPointOfOrigin: false,
          isPrivate: false,
          label: post.title,
          uri: post.uri,
        };
      }
    });

  markers.push({
    isPointOfOrigin: true,
    isPrivate: false,
    label: 'HQ',
    left: '18%',
    top: '23%',
    uri: undefined,
  });

  return (
    <Components.View
      metadata={{
        title: 'About',
        description:
          'My thru-hiking journey began in 2018, with the iconic 500-mile Camino de Santiago across Northern Spain.',
        url: `/me`,
      }}
    >
      <div className={scss.image}>
        <Components.Image
          alt=""
          canTransform={false}
          height={432}
          sizes="25vw"
          src="2024/06/28/9a2687f2-7a78-497d-87ca-3356ccd0fa36.jpeg"
          width={768}
        />
      </div>
      <h1 className={scss.heading}>About</h1>
      <div className={scss.content}>
        <p>{Constants.ABOUT_ME_BLURB}</p>
        <p>
          After thru-hiking trails across the globe, from the rugged paths of
          South America to the towering peaks of Nepal, I've learned one
          powerful truth: it's not the destination that leaves the greatest
          impact &mdash; it's the journey itself.
        </p>
        <h2>How it started</h2>
        <p>
          My thru-hiking journey began in 2018, with the iconic 500-mile Camino
          de Santiago across Northern Spain. A month-long adventure that took me
          across the Spanish countryside, this trail tested me in unexpected
          ways, from the challenges of endless walking to the thrill of meeting
          incredible people along the way. There's something indescribable about
          carrying everything you need on your back, wandering from village to
          village, day in and day out. My feet ached like never before, but each
          step unveiled a new sense of resilience and I experienced the world
          from an entirely new perspective.
        </p>
        <p>
          By the end of it, I was hooked. Since then I've completed seven unique
          thru-hikes, summited several towering peaks, and traveled to over a
          dozen countries. But it's the places I've wanted to return to, like
          the peaceful trails of Spain or the breathtaking heights of Nepal,
          that have truly captured my heart.
        </p>
        <h2>(Nearly) everywhere I've been</h2>
        <Components.World markers={markers} />
        <h2>The Boring Stuff</h2>
        <p>
          I'm always up for new opportunities! If you're looking to work
          together on a web or mobile project, check out my{' '}
          <a href={Constants.RESUME_URL} target="_blank" rel="noreferrer">
            resume
          </a>{' '}
          &mdash; I'd love to team up!
        </p>
      </div>
    </Components.View>
  );
}

export default Page;
