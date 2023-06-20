import { IModalToggle } from '@lomray/client-helpers-react/modals/root/types';
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

export default MyModal;
