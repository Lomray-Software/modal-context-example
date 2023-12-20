import { IModalProps as IModalPropsDefault } from '@lomray/client-helpers-react/modals/root/types'
import { IModalProps as IModalPropsComponent } from '../../modals/default'

declare module '@lomray/client-helpers-react/modals/root/types' {
  interface IModalProps extends IModalPropsDefault, IModalPropsComponent {}
}
