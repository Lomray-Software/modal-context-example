import React, { FC } from 'react';
import useMyModal from '../modals/my-modal/use-my-modal';
import modalsRef from '../modals/configurator';

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

      <button onClick={() => modalsRef.myModal?.open(null, { text: 'hello global' })}>
        open modal via global
      </button>
    </div>
  );
};

export default Layout;
