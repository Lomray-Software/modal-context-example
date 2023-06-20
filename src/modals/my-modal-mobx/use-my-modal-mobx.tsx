import createModalRef from '@lomray/client-helpers-react/modals/root/create-modal-ref';
import useModalMobx from '@lomray/client-helpers-react/modals/root/use-modal-mobx';
import React from 'react';
import MyModal from './index.wrapper';
import { IMyModalMobx } from './index';

export const myModalMobxRef = createModalRef<IMyModalMobx>();

/**
 * useMyModalMobx
 * @constructor
 */
const useMyModalMobx = () =>
  useModalMobx<IMyModalMobx>(MyModal, {
    bodyClassName: 'styles.body',
    closeButton: (defaultProps) => <div {...defaultProps}>close</div>,
    hookRef: myModalMobxRef as never,
  });

export default useMyModalMobx;
