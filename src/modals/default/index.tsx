import type { FCC } from '@lomray/client-helpers/interfaces/fc-with-children';
import type { IModalToggle } from '@lomray/react-modals';
import type { DialogHTMLAttributes, MouseEvent } from 'react';
import { useRef } from 'react';
import styles from './styles.module.scss';

export type TDialogProps = DialogHTMLAttributes<HTMLDialogElement> & IModalToggle;

/**
 * Dialog component.
 */
const Dialog: FCC<TDialogProps> = ({ children, closeModal, className, ...rest }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  /**
   * Close modal
   * Click outside Content component
   */
  const handleClickOutside = (e: MouseEvent<HTMLDialogElement>): void => {
    if (e.target !== dialogRef.current) {
      return;
    }

    closeModal();
  };

  return (
    <dialog
      open
      ref={dialogRef}
      onClick={handleClickOutside}
      className={[styles.dialog, className].join(' ')}
      {...rest}
    >
      {children}
    </dialog>
  );
};

export default Dialog;
