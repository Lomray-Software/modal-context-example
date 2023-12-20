import { IModalProps as IModalPropsDefault } from '@lomray/react-modals'
import { TDialogProps } from '../../modals/default'

declare module '@lomray/react-modals' {
  interface IModalProps extends IModalPropsDefault, TDialogProps {}
}
