import Ui from '@/ui';

import { styles } from './stylesheet';

export default function Image() {
  return (
    <>
      <Ui.Image
        className={styles.image}
        src="12a81235-f377-4a2c-ba0f-22fb36e8c399.jpeg"
        thumb="data:image/jpeg;base64,/9j/2wBDAFA3PEY8MlBGQUZaVVBfeMiCeG5uePWvuZHI////////////////////////////////////////////////////2wBDAVVaWnhpeOuCguv/////////////////////////////////////////////////////////////////////////wAARCAAgACgDAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEDAgT/xAAjEAACAgEDBAMBAAAAAAAAAAABAgARUQMhMRITQWEEMmJx/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AK9eAIB3DgQDufmAB/UBdzfgQJWazACTUA0XUqwfjOIASB52gLrwIElchlF8QKahYLu13AzoKWajsD5MBsrLvz7EBFh5swLH469XEDkf7kYgAdl4NQNpqsHu/wCjMDY0y52FLA//2Q=="
      />
      <div className={styles.overlay} />
      <figcaption className={styles.caption}>
        {`Fenetre d'Arpette, Switzerland — 2018`.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </figcaption>
    </>
  );
}
