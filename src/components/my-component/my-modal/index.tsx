import { IModalToggle } from '@lomray/client-helpers-react/modals/root/types';
import React, { FC } from 'react';
import createModalRef from '@lomray/client-helpers-react/modals/root/create-modal-ref';
import useModal from '@lomray/client-helpers-react/modals/root/use-modal';

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
