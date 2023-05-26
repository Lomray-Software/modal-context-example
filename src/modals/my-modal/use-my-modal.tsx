import useModal from '@lomray/client-helpers-react/modals/root/use-modal';
import React from 'react';
import type { IMyModal } from './index';
import MyModal from './index';

/**
 * useMyModal
 * @constructor
 */
const useMyModal = () =>
  useModal<IMyModal>(MyModal, {
    bodyClassName: 'styles.body',
    closeButton: (defaultProps) => <div {...defaultProps}>close</div>,
});

export default useMyModal;
