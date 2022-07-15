import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  loading,
  ...props
}: ButtonProps) => {
  const mode = primary ? styles['button-primary'] : styles['button-secondary'];
  const load = loading ? styles['button-loading'] : '';
  return (
    <button
      type="button"
      className={[styles.button, styles[`button-${size}`], mode, load].join(
        ' '
      )}
      style={{ backgroundColor }}
      {...props}
    >
      <span className="loading" data-testid="loading" />
      {label}
    </button>
  );
};
