import type { IModalParentId, IModalToggle } from '@lomray/react-modals';
import { createModalRef, useModalMobx } from '@lomray/react-modals';
import { withStores } from '@lomray/react-mobx-manager';
import React, { FC } from 'react';
import stores, { IStore } from './index.stores';

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

const MyModalMobxWrapper = withStores(MyModalMobx, stores)

export const myModalMobxRef = createModalRef<IMyModalMobx>();

/**
 * useMyModalMobx
 * @constructor
 */
const useMyModalMobx = () =>
  useModalMobx<TProps>(MyModalMobxWrapper, {
    className: 'styles.body',
    hookRef: myModalMobxRef,
  });

export default useMyModalMobx;
