import { withStores } from '@lomray/react-mobx-manager';
import React, { FC } from 'react';
import stores, { IStore } from './index.stores';
import useMyModalMobx, { myModalMobxRef } from './my-modal-mobx';

/**
 * MyComponentMobx
 * @constructor
 */
const MyComponentMobx: FC<IStore> = ({ store: { text }}) => {
  const [open] = useMyModalMobx();

  return (
    <div>
      <h1>MyComponentMobx</h1>

      <p>
        Store text: {text}
      </p>

      <button onClick={() => open({ text: 'modal with mobx via hook' })}>
        open modal via hook
      </button>

      <button onClick={() => myModalMobxRef?.open({ text: 'modal with mobx via ref' })}>
        open modal via ref
      </button>
    </div>
  );
};

// @ts-ignore
MyComponentMobx.contextId = 'contextId';

const MyComponentMobxWrapper = withStores(MyComponentMobx, stores)

export default MyComponentMobxWrapper;
