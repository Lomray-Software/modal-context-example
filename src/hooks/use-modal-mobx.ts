import { useStoreManagerParentContext } from '@lomray/react-mobx-manager';
import { IModalParentId } from '@lomray/client-helpers-react/modals/root/types';
import { IDefaultModalProps, IModalItem } from '@lomray/client-helpers-react/modals/root/context';
import useModal from '@lomray/client-helpers-react/modals/root/use-modal';

/**
 * Use modal for custom inners
 */
const useModalMobx = <TProps extends IModalParentId>(
  Component: IModalItem<TProps>['Component'],
  props?: IDefaultModalProps,
  componentProps?: IModalItem<TProps>['componentProps'],
) => {
  const { parentId } = useStoreManagerParentContext();

  return useModal(Component as never, props, { ...componentProps, parentId } as TProps & IModalParentId);
};

export default useModalMobx;
