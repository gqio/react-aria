import * as React from 'react';
const { useRef } = React;
import type { ElementType, HTMLAttributes } from 'react';
import type { AriaButtonProps } from '@react-types/button';
import { useButton } from '@react-aria/button';
import type { ButtonAria } from '@react-aria/button';
import styles from './button.module.scss';

export type ButtonProps = AriaButtonProps<ElementType> & {
  /**
  Use the size prop to change the size of the button. You can set the value to 'small', 'medium' or 'large'.
   */
  size: 'small' | 'medium' | 'large';
};

/**
  The Button component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
*/
export const Button = ({
  size = 'medium',
  ...rest
}: ButtonProps): ButtonAria<HTMLAttributes<any>> => {
  const ref = useRef();
  const { buttonProps } = useButton(rest, ref);
  const { children } = rest;

  return (
    <button
      {...buttonProps}
      ref={ref}
      className={`${styles.button} ${styles[size]}`}
    >
      {children}
    </button>
  );
};
