import React, { FC } from 'react';
import useMyModalMobx, { myModalMobxRef } from '../../modals/my-modal-mobx/use-my-modal-mobx';
import { IStore } from './index.stores';

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

export default MyComponentMobx;
