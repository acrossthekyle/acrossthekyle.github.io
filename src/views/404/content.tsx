import tw from '@/styles';

export default function Content() {
  return (
    <p className={styles.container}>
      <span>While I web surfed, weak and weary,</span>
      <span>For pages long forgotten yore.</span>
      <span>When I clicked my fav'rite href,</span>
      <span>Suddenly there came a warning,</span>
      <span>and my heart was filled with mourning,</span>
      <span>Mourning for my dear missing page,</span>
      <span>"Tis not possible!", I muttered,</span>
      <span>"Give thine pages, I emplore!"</span>
      <span>Quoth the server, 404.</span>
    </p>
  );
};

const styles = tw({
  container: `
    flex flex-col
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
});
