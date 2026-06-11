import { styles } from './stylesheet';

export default function Body({ children }: React.PropsWithChildren) {
  return (
    <body className={styles.container}>
      {children}
    </body>
  );
}
