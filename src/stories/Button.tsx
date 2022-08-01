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
  badge?: boolean;
  IconLeft?: typeof React.Component;
  IconRight?: typeof React.Component;
}

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  loading,
  badge,
  IconLeft,
  IconRight,
  disabled,
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
      disabled={disabled}
      {...props}
    >
      {IconLeft ? <IconLeft className={styles['button-iconLeft']} /> : null}
      <span className={styles['button-iconLoading']} data-testid="loading" />
      <span className={styles['button-label']}>{label}</span>
      {IconRight ? <IconRight className={styles['button-iconRight']} /> : null}
      {badge && !disabled ? (
        <span className={styles['button-badge']} data-testid="badge" />
      ) : null}
    </button>
  );
};
