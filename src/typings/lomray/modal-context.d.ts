import { IModalProps as IModalPropsDefault } from '@lomray/client-helpers-react/modals/root/types'
import { TDialogProps } from '../../modals/default'

declare module '@lomray/client-helpers-react/modals/root/types' {
  interface IModalProps extends IModalPropsDefault, TDialogProps {}
}
