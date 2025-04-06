import Components from '@/components';
import Constants from '@/constants';
import Styles from '@/styles';

const scss = Styles.Pages.Me.Page;

function Page() {
  return (
    <Components.View title="About">
      <h1 className={scss.heading}>About</h1>
      <p className={scss.paragraph}>{Constants.ABOUT_ME_BLURB}</p>
      <div className={scss.image}>
        <Components.Image
          alt=""
          height={432}
          sizes="25vw"
          src="2024/06/28/9a2687f2-7a78-497d-87ca-3356ccd0fa36.jpeg"
          width={768}
        />
      </div>
      <div className={scss.content}>
        <p>
          After thru-hiking several trails around the world, from South America
          to Nepal, I've found that the journey, rather than the destination,
          leaves the most impact and I discover what I’m capable of after
          walking for days-on-end, mile after mile, mountain pass after mountain
          pass.
        </p>
        <p>
          My first exposure to thru-hiking was a 500 mile walking trail across
          Northern Spain called the Camino de Santiago in 2018. It was a
          month-long journey across the country, full of new experiences and
          hardships, and I met so many amazing people on it. There is nothing
          quiet like carrying everything you need on your back, while walking
          across open land from village to village, day after day. Yes my feet
          hurt (a lot), but I discovered what I was capable of, and I
          experienceed the world in a unique way.
        </p>
        <p>
          Needless to say, I was hooked. Since 2018 I've completed 7 unique
          thru-hikes, summitted several mountain peaks, and traveled to more
          than a dozen countries. My favorite places so far have been Spain
          where I did the Camino de Santiago, and the Annapurna Circuit in
          Nepal.
        </p>
        <p>
          Feel free to{' '}
          <a href="mailto:hello@acrossthekyle.com">send me an email</a> if you
          want to know more.
        </p>
        <h3>The Boring Stuff</h3>
        <p>
          I'm always open to new opportunities: here's my{' '}
          <a href={Constants.RESUME_URL} target="_blank" rel="noreferrer">
            resume
          </a>{' '}
          if you're interested in working together on a web or mobile project.
        </p>
      </div>
    </Components.View>
  );
}

export default Page;
