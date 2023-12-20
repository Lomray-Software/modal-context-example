import type { IModalToggle } from '@lomray/react-modals';
import { createModalRef, useModal } from '@lomray/react-modals';
import React, { FC } from 'react';

export interface IMyModal {
  text: string;
}

/**
 * MyModal
 * @constructor
 */
const MyModal: FC<IMyModal & IModalToggle> = ({ toggle, isVisible, text = 'default' }) => (
  <div style={{ width: 300 }}>
    <p>isVisible: {isVisible}</p>
    <p>text: {text}</p>
    <button onClick={toggle}>close</button>
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
