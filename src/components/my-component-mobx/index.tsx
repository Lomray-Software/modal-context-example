import React, { FC } from 'react';
import stores, { IStore } from './index.stores';
import useMyModalMobx, { myModalMobxRef } from './my-modal-mobx';
import { withStores } from '@lomray/react-mobx-manager/./index';

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

      <button onClick={(e) => open(e)}>
        open modal via hook
      </button>

      <button onClick={(e) => myModalMobxRef?.open(e)}>
        open modal via global
      </button>
    </div>
  );
};

// @ts-ignore
MyComponentMobx.contextId = 'contextId';

const MyComponentMobxWrapper = withStores(MyComponentMobx, stores)

export default MyComponentMobxWrapper;
