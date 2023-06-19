import { useStoreManagerParentContext } from '@lomray/react-mobx-manager';
import { IModalParentId } from '@lomray/client-helpers-react/modals/root/types';
import { IDefaultModalProps, IModalItem } from '@lomray/client-helpers-react/modals/root/context';
import useModal from '@lomray/client-helpers-react/modals/root/use-modal';

/**
 * Use modal for custom inners
 */
const useModalMobx = <TProps extends object>(
  Component: IModalItem<TProps & IModalParentId>['Component'],
  props?: IDefaultModalProps,
  componentProps?: IModalItem<TProps & IModalParentId>['componentProps'],
) => {
  const parentId = useStoreManagerParentContext();

  return useModal(Component as never, props, { ...componentProps, parentId });
};

export default useModalMobx;
