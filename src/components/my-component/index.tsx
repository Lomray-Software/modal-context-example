import React, { FC } from 'react';
import useMyModal, { myModalRef } from './my-modal';

/**
 * MyComponent
 * @constructor
 */
const MyComponent: FC = () => {
  const [open] = useMyModal();

  return (
    <div>
      <h1>MyComponent</h1>

      <button onClick={(e) => open(e, { text: 'hello hook' })}>
        open modal via hook
      </button>

      <button onClick={(e) => myModalRef?.open(e)}>
        open modal via global
      </button>
    </div>
  );
};

export default MyComponent;
