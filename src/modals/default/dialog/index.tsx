import type { FCC } from '@lomray/client-helpers/interfaces/fc-with-children';
import type { IModalState, IModalProps } from '@lomray/client-helpers-react/modals/root/types'
import React, { useMemo } from 'react';
import styles from './styles.module.scss';

type IDialog = Pick<
  IModalProps,
  'animation' | 'enterAnimation' | 'leaveAnimation' | 'bodyClassName'
> &
  Pick<IModalState, 'animationType'>;

/**
 * Modal Dialog
 * @constructor
 */
const Dialog: FCC<IDialog> = ({
  animationType,
  enterAnimation,
  leaveAnimation,
  children,
  bodyClassName = '',
  animation = 'fade',
}) => {
  /**
   * Set animation type
   */
  const resAnimation = useMemo(
    () => (animationType === 'enter' ? enterAnimation : leaveAnimation) || animation,
    [animation, animationType, enterAnimation, leaveAnimation],
  );

  /**
   * Set container styles
   */
  const animationStyles = useMemo(() => ({ animationDuration: '300ms' }), []);

  return (
    <div className={styles.dialog}>
      <div
        style={animationStyles}
        className={[
          styles.body,
          styles[`modal-${resAnimation}-${animationType}`],
          bodyClassName,
        ].join(' ')}
      >
        {children}
      </div>
    </div>
  );
};

export default Dialog;
