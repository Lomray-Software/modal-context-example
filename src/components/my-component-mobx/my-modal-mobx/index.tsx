import type { IModalToggle } from '@lomray/react-modals';
import { createModalRef, useModalMobx } from '@lomray/react-modals';
import { withStores } from '@lomray/react-mobx-manager';
import React, { FC } from 'react';
import stores, { IStore } from './index.stores';

interface IMyModalMobx {
  text?: string;
}

export type TProps = IMyModalMobx & IModalToggle & IStore;

/**
 * MyModalMobx
 * @constructor
 */
const MyModalMobx: FC<TProps> = ({
  closeModal,
  isVisible,
  store: { count, addCount },
  text = 'default'
}) => (
  <div style={{ width: 300, background: '#fff', padding: 20 }}>
    <p>isVisible: {String(isVisible)}</p>
    <p>text: {text}</p>
    <p>count: {count}</p>
    <button onClick={addCount}>add count</button>
    <button onClick={closeModal}>close</button>
  </div>
);

const MyModalMobxWrapper = withStores(MyModalMobx, stores)

export const myModalMobxRef = createModalRef<TProps>();

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
