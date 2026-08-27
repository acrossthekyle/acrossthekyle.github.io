import tw from '@/styles';

export default function Copyright() {
  return (
    <p className={styles.container}>
      Words + images + code copyrighted since 2011
    </p>
  );
};

const styles = tw({
  container: `
    w-full
    p-6 py-4
    text-xtiny
    uppercase
    tracking-widest
    border-t border-current/12.5

    sm:fixed
    sm:bottom-6
    sm:right-8
    sm:z-5
    sm:p-0
    sm:w-auto
    sm:rotate-90
    sm:origin-bottom-right
    sm:text-white
    sm:scale-85
    lg:border-t-0
  `,
});
