import tw from '@/styles';

type Props = {
  index: number;
  isExpanded: boolean;
};

const STYLES = [
  'w-[calc(33%-0.5rem)] xl:w-[calc(35%-0.5rem)]',
  'w-[calc(60%-0.5rem)] xl:w-[calc(40%-0.5rem)]',
  'w-[calc(50%-0.5rem)] xl:w-[calc(55%-0.5rem)]',
  'w-[calc(50%-0.5rem)] xl:w-[calc(33%-0.5rem)]',
  'w-[calc(45%-0.5rem)] xl:w-[calc(40%-0.5rem)]',
  'w-[calc(35%-0.5rem)] xl:w-[calc(55%-0.5rem)]',
  'w-[calc(66%-0.5rem)] xl:w-[calc(45%-0.5rem)]',
  'w-[calc(33%-0.5rem)] xl:w-[calc(30%-0.5rem)]',
  'w-[calc(40%-0.5rem)] xl:w-[calc(30%-0.5rem)]',
  'w-[calc(50%-0.5rem)] xl:w-[calc(25%-0.5rem)]',
];

export default function Item({
  children,
  index,
  isExpanded,
}: React.PropsWithChildren<Props>) {
  return (
    <li className={styles.container(index, isExpanded)}>
      {children}
    </li>
  );
};

const styles = tw({
  container: (index: number, isExpanded: boolean) => tw(`
    ${isExpanded ? 'z-50 mb-31.75' : 'relative z-0'}
    inline-block
    h-30
    ${STYLES[index % STYLES.length]}
    mr-1.5
  `),
});
