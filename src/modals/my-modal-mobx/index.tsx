import { IModalParentId, IModalToggle } from '@lomray/client-helpers-react/modals/root/types';
import React, { FC } from 'react';
import { IStore } from './index.stores';

export interface IMyModalMobx {
  text?: string;
}

export type TProps = IMyModalMobx & IModalToggle & IModalParentId & IStore;

/**
 * MyModalMobx
 * @constructor
 */
const MyModalMobx: FC<TProps> = ({
  toggle,
  isVisible,
  parentId,
  store: { count, addCount},
  text = 'default'
}) => (
  <div style={{ width: 300 }}>
    <p>text: {text}</p>
    <p>parentId: {parentId}</p>
    <p>count: {count}</p>
    <button onClick={addCount}>add count</button>
    <button onClick={toggle}>close</button>
  </div>
);

export default MyModalMobx;
