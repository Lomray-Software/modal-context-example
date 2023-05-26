import type { FC } from 'react';
import useMyModal from '../my-modal/use-my-modal';

// Must be imported at least once in the app to initialize the ref
const modalsRef: {
  myModal?: {
    open: ReturnType<typeof useMyModal>[0]
    hide: ReturnType<typeof useMyModal>[1]
  }
} = {};

/**
 * ModalContextConfigurator
 * @constructor
 */
export const ModalContextConfigurator: FC = () => {
  const [openMyModal, hideMyModal] = useMyModal();

  modalsRef.myModal = { open: openMyModal, hide: hideMyModal };

  return null;
};

export default modalsRef;
