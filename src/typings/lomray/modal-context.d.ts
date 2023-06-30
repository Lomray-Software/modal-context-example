import type {
  IModalProps as IModalPropsBase,
} from '@lomray/client-helpers-react/modals/root/types';
import { ReactNode } from 'react';

declare module '@lomray/client-helpers-react/modals/root/types' {
  export type ModalAnimation =
    | 'zoom'
    | 'fade'
    | 'flip'
    | 'door'
    | 'rotate'
    | 'slideUp'
    | 'slideDown'
    | 'slideLeft'
    | 'slideRight'
    | 'mobileMenuOpen'
    | 'mobileMenuClose';

  export type ModalAnimationType = 'enter' | 'leave';

  export interface IModalProps<TProps extends object = Record<string, any>> extends IModalPropsBase<TProps> {
    animation?: ModalAnimation;
    enterAnimation?: ModalAnimation;
    leaveAnimation?: ModalAnimation;
    shouldCloseOnEsc?: boolean;
    willCloseMaskOnClick?: boolean;
    isShowMask?: boolean;
    onAnimationEnd?: () => void;
    onClose?: () => void;
    className?: string;
    bodyClassName?: string;
    closeButton?: (defaultProps: { onClick: () => void; className: string }) => ReactNode;
  }

  export interface IModalState {
    isShow: boolean;
    animationType: ModalAnimationType;
  }
}
