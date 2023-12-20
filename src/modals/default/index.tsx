import type { FCC } from '@lomray/client-helpers/interfaces/fc-with-children';
import { IModalToggle } from '@lomray/client-helpers-react/modals/root/types';
import type { DialogHTMLAttributes, MouseEvent } from 'react';
import { useRef } from 'react';
import styles from './styles.module.scss';

export type TDialogProps = DialogHTMLAttributes<HTMLDialogElement> & IModalToggle;

/**
 * Dialog component.
 */
const Dialog: FCC<TDialogProps> = ({ children, className, onClose, toggle }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  /**
   * Close modal
   * Click outside Content component
   */
  const handleClickOutside = (e: MouseEvent<HTMLDialogElement>): void => {
    if (e.target !== dialogRef.current) {
      return;
    }

    toggle();
    onClose?.(e);
  };

  return (
    <dialog
      open
      ref={dialogRef}
      onClick={handleClickOutside}
      className={[styles.dialog, className].join(' ')}
    >
      <div className={styles.content}>
        {children}
      </div>
    </dialog>
  );
};

export default Dialog;
