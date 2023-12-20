import createModalRef from '@lomray/client-helpers-react/modals/root/create-modal-ref';
import useModal from '@lomray/client-helpers-react/modals/root/use-modal';
import type { IMyModal } from './index';
import MyModal from './index';

export const myModalRef = createModalRef<IMyModal>();

/**
 * useMyModal
 * @constructor
 */
const useMyModal = () =>
  useModal<IMyModal>(MyModal, {
    className: 'styles.body',
    hookRef: myModalRef,
  });

export default useMyModal;
