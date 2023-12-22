import type { IModalToggle } from '@lomray/react-modals';
import { createModalRef, useModal } from '@lomray/react-modals';
import React, { FC } from 'react';

export interface IMyModal extends IModalToggle {
  text: string;
}

/**
 * MyModal
 * @constructor
 */
const MyModal: FC<IMyModal> = ({ closeModal, isVisible, text = 'default' }) => (
  <div style={{ width: 300, background: '#fff', padding: 20 }}>
    <p>isVisible: {String(isVisible)}</p>
    <p>text: {text}</p>
    <button onClick={closeModal}>close</button>
  </div>
);

export const myModalRef = createModalRef<IMyModal>();

/**
 * useMyModal
 * @constructor
 */
const useMyModal = () =>
  useModal<IMyModal>(MyModal, {
    className: 'styles.body',
    hookRef: myModalRef,
  });

export default useMyModal;
