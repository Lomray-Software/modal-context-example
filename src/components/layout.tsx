import React, { FC } from 'react';
import useMyModal, { myModalRef } from '../modals/my-modal/use-my-modal';

/**
 * Layout
 * @constructor
 */
const Layout: FC = () => {
  const [open] = useMyModal();

  return (
    <div>
      <button onClick={() => open(null, { text: 'hello hook' })}>
        open modal via hook
      </button>

      <button onClick={() => myModalRef?.open(null, { text: 'hello global' })}>
        open modal via global
      </button>
    </div>
  );
};

export default Layout;
