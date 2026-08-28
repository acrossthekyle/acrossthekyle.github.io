import tw from '@/styles';

type Props = {
  isActive: boolean;
};

export default function Copyright({ isActive }: Props) {
  return (
    <p className={styles.container(isActive)}>
      Words + images + code copyrighted since 2011
    </p>
  );
};

const styles = {
  container: (isActive: boolean) => tw(`
    absolute bottom-6 left-6 z-5
    text-xtiny
    font-thin
    uppercase
    tracking-widest
    leading-[0]
    ${isActive ? 'opacity-100' : 'opacity-0'}

    motion-safe:duration-300
    motion-safe:delay-300
  `),
};
