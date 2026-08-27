import { Header } from '@/layout';
import tw from '@/styles';
import { Ui } from '@/ui';
import { image } from '@/utils';

import Back from './back';

export default function View() {
  return (
    <>
      <Header />
      <main>
        <article className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>
              <span className={styles.eyebrow}>
                Error Code: 404
              </span>
              <span className={styles.heading}>
                Not found
              </span>
              <span className={styles.lid}>
                Sorry, that page does not exist
              </span>
            </h1>
            <Back />
          </header>
          <p className={styles.message}>
            While I web surfed, weak and weary,<br />
            For pages long forgotten yore.<br />
            When I clicked my fav'rite href,<br />
            Suddenly there came a warning,<br />
            and my heart was filled with mourning,<br />
            Mourning for my dear missing page,<br />
            "Tis not possible!", I muttered,<br />
            "Give thine pages, I emplore!"<br />
            Quoth the server, 404.
          </p>
          <figure className={styles.lost}>
            <Ui.Image
              className={styles.image}
              size="large"
              src={image('3eb59a8f-eaee-429c-86bf-789e98d39ad2', 'me')}
            />
          </figure>
        </article>
      </main>
    </>
  );
};

const styles = tw({
  container: `
    grid grid-cols-1
    w-full

    sm:w-1/2
    lg:w-full
    lg:h-svh
    lg:grid-cols-3
  `,
  header: `
    flex flex-col order-0
    w-full h-svh
    p-6 pt-16

    sm:h-svh
    lg:border-r
    lg:border-current/12.5
  `,
  title: `
    flex flex-col justify-end gap-1
    mt-auto
    uppercase
  `,
  eyebrow: `
    block
    mb-2
    font-mono
    text-tiny

    sm:text-xtiny
  `,
  heading: `
    block
    pr-18
    text-[min(8vw,1.75rem)]
    leading-[1]
    font-black

    sm:text-[min(4vw,1.75rem)]
    sm:leading-[0.8]
    sm:pr-0
  `,
  lid: `
    block
    mt-2
    text-tiny
    tracking-widest

    sm:text-xtiny
  `,
  message: `
    w-full
    p-6
    leading-[1.75]
    text-sm
    font-mono
    border-t border-current/12.5

    sm:order-1
    sm:text-xs
    lg:text-tiny
    lg:border-t-0
    lg:overflow-y-auto
    lg:scroll-smooth
    lg:h-svh
    lg:flex
    lg:flex-col
    lg:justify-end
  `,
  lost: `
    relative z-0
    col-span-1 order-1

    sm:fixed
    sm:top-0
    sm:right-0
    sm:bottom-0
    sm:w-1/2
    lg:relative
    lg:top-auto
    lg:right-auto
    lg:bottom-auto
    lg:w-full
    lg:order-2
  `,
  image: `
    grayscale brightness-70
    mask-t-from-80% mask-t-to-100%

    dark:brightness-80

    sm:mask-none
  `,
});
