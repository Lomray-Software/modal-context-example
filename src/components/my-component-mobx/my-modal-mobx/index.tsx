import { IModalParentId, IModalToggle } from '@lomray/client-helpers-react/modals/root/types';
import React, { FC } from 'react';
import stores, { IStore } from './index.stores';
import createModalRef from '@lomray/client-helpers-react/modals/root/create-modal-ref';
import useModalMobx from '@lomray/client-helpers-react/modals/root/use-modal-mobx';
import { withStores } from '@lomray/react-mobx-manager/./index';

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
