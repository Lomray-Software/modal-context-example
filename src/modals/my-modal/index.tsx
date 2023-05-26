import { IModalToggle } from '@lomray/client-helpers-react/modals/root/types';
import React, { FC } from 'react';

export interface IMyModal {
  text: string;
}

/**
 * MyModal
 * @constructor
 */
const MyModal: FC<IMyModal & IModalToggle> = ({ text, toggle, isVisible }) => (
  <div style={{ width: 300 }}>
    <p>{text}</p>
    <button onClick={toggle}>close</button>
  </div>
);

export default MyModal;
