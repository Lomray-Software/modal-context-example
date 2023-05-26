import type { IModalState, IModalProps } from '@lomray/client-helpers-react/modals/root/types'
import type { ReactNode } from 'react';
import React, { PureComponent } from 'react';
import Dialog from './dialog';
import styles from './styles.module.scss';

/**
 * Modal
 */
class Modal extends PureComponent<IModalProps, IModalState> {
  static defaultProps = {
    isVisible: false,
    isShowMask: true,
    shouldCloseOnEsc: true,
    willCloseMaskOnClick: true,
  };

  /**
   * Main container ref
   */
  private container: HTMLDivElement | null | undefined;

  state: IModalState = {
    isShow: false,
    animationType: 'leave',
  };

  componentDidMount(): void {
    const { isVisible } = this.props;

    if (isVisible) {
      this.enter();
    }
  }

  componentDidUpdate(prevProps: Readonly<IModalProps>): void {
    const { isVisible } = this.props;

    if (isVisible && !prevProps.isVisible) {
      this.enter();
    }

    if (!isVisible && prevProps.isVisible) {
      this.leave();
    }
  }

  /**
   * Additionally run leave method on unmount
   * In some cases, the function doesn't work out to the end
   */
  componentWillUnmount() {
    this.leave();
  }

  /**
   * Show modal
   */
  enter = () => {
    this.setState({ isShow: true, animationType: 'enter' });

    const scrollWidth = window.innerWidth - document.body.offsetWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollWidth}px`;
  };

  /**
   * Close modal
   */
  leave = () => {
    const { onClose } = this.props;

    this.setState({ animationType: 'leave' });
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '';
    onClose?.();
  };

  /**
   * Close modal on press 'esc' button
   */
  handleOnKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { shouldCloseOnEsc, toggle } = this.props;

    if (!shouldCloseOnEsc || event.key !== 'Escape') {
      return;
    }

    toggle?.();
  };

  /**
   * Animation end event
   */
  handleAnimationEnd = (event: React.AnimationEvent<HTMLDivElement>) => {
    const { animationType } = this.state;
    const { shouldCloseOnEsc, onAnimationEnd } = this.props;

    if (animationType === 'leave') {
      this.setState({ isShow: false });
    } else if (shouldCloseOnEsc) {
      this.container?.focus();
    }

    if (event.target === this.container && onAnimationEnd) {
      onAnimationEnd();
    }
  };

  /**
   * Get modal state
   */
  getStyle = (): React.CSSProperties => {
    const { isShow } = this.state;

    return {
      display: isShow ? '' : 'none',
      animationDuration: '300ms',
    };
  };

  /**
   * Render close button
   */
  renderCloseButton = () => {
    const { toggle, closeButton } = this.props;

    if (!closeButton) {
      return;
    }

    return closeButton({ onClick: toggle, className: styles.closeButton });
  };

  render(): ReactNode {
    const { willCloseMaskOnClick, toggle, isShowMask, className, children } = this.props;
    const { animationType } = this.state;

    return (
      <div
        role="presentation"
        style={this.getStyle()}
        className={[styles.modal, styles[`modal-fade-${animationType}`], className ?? ''].join(' ')}
        onAnimationEnd={this.handleAnimationEnd}
        tabIndex={-1}
        ref={(el) => {
          this.container = el;
        }}
        onKeyUp={this.handleOnKeyUp}
      >
        {isShowMask && (
          <div
            role="presentation"
            className={styles.mask}
            {...(willCloseMaskOnClick && {
              onClick: toggle,
            })}
          />
        )}
        <Dialog {...this.props} animationType={animationType}>
          {this.renderCloseButton()}
          {children}
        </Dialog>
      </div>
    );
  }
}

export default Modal;
