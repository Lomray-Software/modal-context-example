import createModalRef from '@lomray/client-helpers-react/modals/root/create-modal-ref';
import useModal from '@lomray/client-helpers-react/modals/root/use-modal';
import React from 'react';
import type { IMyModal } from './index';
import MyModal from './index';

export const myModalRef = createModalRef<IMyModal>();

/**
 * useMyModal
 * @constructor
 */
const useMyModal = () =>
  useModal<IMyModal>(MyModal, {
    bodyClassName: 'styles.body',
    closeButton: (defaultProps) => <div {...defaultProps}>close</div>,
    hookRef: myModalRef,
  });

export default useMyModal;
