import React, { FC } from 'react';
import useMyModal, { myModalRef } from './my-modal';

/**
 * MyComponent
 * @constructor
 */
const MyComponent: FC = () => {
  const [open] = useMyModal(); // [open, hide]

  return (
    <div>
      <h1>MyComponent</h1>

      <button onClick={() => open({ text: 'open modal via hook' })}>
        open modal via hook
      </button>
      <button onClick={() => myModalRef?.open({ text: 'open modal via ref' })}>
        open modal via ref
      </button>
    </div>
  );
};

export default MyComponent;
