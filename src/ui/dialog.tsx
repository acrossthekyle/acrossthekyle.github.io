import styles from '@/styles/ui/dialog.module.scss';

import Button from './button';

type Props = {
  isRenderable: boolean;
  onDismiss: () => void;
  text: string;
};

function Dialog({ isRenderable, onDismiss, text }: Props) {
  return (
    <div className={styles.dialog} data-renderable={isRenderable}>
      <div className={styles.box}>
        <div className={styles.message}>{text}</div>
        <div className={styles.buttons}>
          <Button onClick={onDismiss} text="OK" />
        </div>
      </div>
    </div>
  );
}

export default Dialog;
