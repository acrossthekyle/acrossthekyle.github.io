import Components from '@/components';
import Constants from '@/constants';
import Styles from '@/styles';

import Trips from './page.components.trips';

const scss = Styles.Pages.Me.Page;

function Page() {
  return (
    <Components.View title="About">
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
          impact &mdash; it's the journey itself. Day after day, mile after
          mile, mountain pass after mountain pass, I discover new depths of what
          I'm truly capable of.
        </p>
        <p>
          My thru-hiking journey began in 2018, with the iconic 500-mile Camino
          de Santiago across Northern Spain. A month-long adventure that took me
          across the Spanish countryside, this trail tested me in unexpected
          ways, from the challenges of endless walking to the thrill of meeting
          incredible people along the way. There's something indescribable about
          carrying everything you need on your back, wandering from village to
          village, day in and day out. Sure, my feet ached like never before,
          but each step unveiled a new sense of resilience &mdash; and I
          experienced the world in a way I never had before.
        </p>
        <p>
          By the end of it, I was hooked. Since that first Camino, I've
          completed seven unique thru-hikes, summited several towering peaks,
          and traveled through over a dozen countries. But it's the places I've
          returned to &mdash; like the peaceful trails of Spain and the
          breathtaking Annapurna Circuit in Nepal &mdash; that have truly
          captured my heart.
        </p>
        <Trips />
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
