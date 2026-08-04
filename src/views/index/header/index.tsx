import { Ui } from '@/ui';

import { styles } from './stylesheet';

export default function Header() {
  return (
    <header className={styles.container}>
      <h1 className={styles.header}>
        Hi, my name's <span className={styles.emphasis}>Kyle</span> <span className={styles.thin}>&mdash;</span> an inspired <span className={styles.emphasis}>backpacking </span> and <span className={styles.emphasis}>travel </span> enthusiast living a city-based life in <span className={styles.emphasis}>Chicago </span> crafting digital <span className={styles.emphasis}>experiences.</span>
      </h1>
      <figure className={styles.figure}>
        <Ui.Image
          className={styles.image}
          src="12a81235-f377-4a2c-ba0f-22fb36e8c399.jpeg"
          thumb="data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAgACgDAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEDAgT/xAAjEAACAgEDBAMBAAAAAAAAAAABAgARUQMhMRITQWEEMmJx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AK9eAIB3DgQDufmAB/UBdzfgQJWazACTUA0XUqwfjOIASB52gLrwIElchlF8QKahYLu13AzoKWajsD5MBsrLvz7EBFh5swLH469XEDkf7kYgAdl4NQNpqsHu/wCjMDY0y52FLA//2Q=="
        />
      </figure>
      <p className={styles.introduction}>
        From the heights of the Himalayas in Nepal to the windswept expanses of Patagonia I'm always seeking the next adventure &mdash; even after spending hundreds of days and thousands of miles walking through forests, over mountains, and across entire countries. Between adventures I'm a self-taught software engineer with a thrill for writing code and experimenting with user interfaces, even after {new Date().getFullYear() - 2012} years.
      </p>
    </header>
  );
}
